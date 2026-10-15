import { User } from "../user/user.entity";
import { AppDataSource } from "../../database";
import { AppError } from '../../utils/AppError';
import { validate} from "class-validator";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { UserService } from "../user/user.service";
import Encryption, {IPayloadEncryption} from "../../utils/encryption";
import config from "../../utils/config";
dotenv.config();


interface LoginResponse {

  user:string,
  token:string
}



const userRepository = AppDataSource.getRepository(User);
const userService = new UserService ();
const encryption = new Encryption();

export class AuthService {
  private domain : string;
  private emailEmpresa : string;
  private transporter : nodemailer.Transporter

  constructor (){
      this.domain= config.domain;
      this.emailEmpresa = process.env.EMAIL_EMPRESA || "";
      this.transporter=nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: process.env.EMAIL_EMPRESA,
          pass: process.env.PASSWORD_EMAIL_EMPRESA,
        },
      });
  }

  public async allDataUserByEmail(email : string){
    try {
      const user = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName','user.email','user.password','role.name','status.name'])
      .where("user.email = :email", { email })
      .getOne();
      return user
    }catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

async login(email:string,pass:string) : Promise <LoginResponse> {

    let user: any = await this.allDataUserByEmail(email)

    if(user) {
      const passValidation = await encryption.verifyPassword(pass,user.password);
      if(!passValidation) {
        throw new AppError({ message: 'Las credenciales son invalidas', httpCode: 401 });
      } else {
        const payload:IPayloadEncryption = {'userId': user.id,'email':user.email,'role':user.role}
        const token = encryption.tokenLogin(payload);
        delete user.password;
        return { user,token };
      }
    } else {
      throw new AppError({ message: 'Las credenciales son invalidas', httpCode: 401 });
    }
}
public async linkResetPassword(email : string){
  const user = await  userService.findByEmail(email);
  const payload:IPayloadEncryption = {'userId': user.id,'email':user.email,'role':user.role}
  const token = encryption.linkResetPassword(payload)
  const linkResetPassword = `${this.domain}/api/auth/reset-password/${token}`;
  const mailOptions = {
    from: this.emailEmpresa,
    to: user.email,
    subject: 'Restablecimiento de contraseña',
    text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: ${linkResetPassword}`,
  };
  await this.transporter.sendMail(mailOptions);
  return linkResetPassword
}

public async resetPassword(token: string, password: string) {
  const decodedToken = encryption.resetPassword(token)
  const user = await this.allDataUserByEmail(decodedToken.email);
  if (!user) {
    throw new AppError({ message: 'El usuario o contraseña no existe', httpCode: 400 });
  }
  user.password = await encryption.password(password);
  await userRepository.save({ id: user.id, password: user.password });
  const mailOptions = {
    from: this.emailEmpresa,
    to: decodedToken.email,
    subject: 'Contraseña restablecida',
    text: 'Tu contraseña ha sido restablecida exitosamente.',
  };
  await this.transporter.sendMail(mailOptions);
  return user;
}

public async changePassword( email : string,oldPassword: string, newPassword: string) {
  try {
    const user = await this.allDataUserByEmail(email)
    if(!user || !user.password){
      throw new AppError({ message: 'el usuario o contrasenia no existe', httpCode: 400 });
    }
    const isMatch = await encryption.verifyPassword(oldPassword,user.password);
    if (!isMatch) {
      throw new AppError({ message: 'La contraseña antigua es incorrecta', httpCode: 400 });
    }
    user.password = await encryption.password(newPassword);
    await userRepository.save({id:user.id,password:user.password});  
    return user;
  } catch (error) {
    throw new AppError({ message: 'Ha ocurrido un error al cambiar la contraseña', httpCode: 400 });
  }
}

}
