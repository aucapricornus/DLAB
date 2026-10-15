import { User } from "./user.entity";
import { Role } from "../role/role.entity";
import { AppDataSource } from "../../database";
import { AppError } from '../../utils/AppError';
import { validate} from "class-validator";
import { Status } from "../status/status.entity";
import Encryption from "../../utils/encryption";


const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);
const  encryption = new Encryption ()


export class UserService{
  

  constructor(){
    
  }
    
  public async findAll() {
    try{
      const users = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName', 'role.id','role.name', 'status.id', 'status.name'])
      .getMany()

      return users;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    if (await userRepository.findOneBy({id}) == null) {
      throw new AppError({ message: 'El usuario no se encuentra registrado', httpCode: 404 });
    }
    try{
      const user = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName', 'role.id','role.name', 'status.id', 'status.name'])
      .where("user.id = :id", { id })
      .getOne()
      console.log('holaaa'+ user);
      
      return user;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
  
 

  public async create(post:User){
      let roleId =  { id:2 } as Role;
      let statusId = { id:2 } as Status;
      let user  = new User();
      user.email = post.email; 
      user.firstName = post.firstName; 
      user.lastName = post.lastName;
      user.password = post.password;
      user.role = roleId;
      user.status = statusId;
      const errors = await validate(user);

      if(errors.length > 0) {
        let errors_arr = [];
        for(let i of errors) {
          errors_arr.push(i.constraints);
        }
        let err = JSON.stringify(errors[0].constraints);
        console.log(err);
        throw new AppError({ message: err,httpCode: 409});
      
      } else {
        const checkUser = await userRepository.findOne({where:{email:post.email}});
        if (checkUser) {
          throw new AppError({ message: 'The email is already in use',httpCode: 409});
        } else {
          post.password = await encryption.password(post.password);
          

          // let role  = new Role();
          // let role = await roleRepository.findOne({where:{name:'User'}});
          // // post.role = 2;
          // // console.log(role);
          const newUser = await userRepository.save(user);
          return newUser;
        }
      }
  }
  
  public async update(id: number, user: User){
    try{
      await userRepository.update(id, user);
      return userRepository.findOneBy({id});     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {
    try{
      await userRepository.delete(id);
      return "Usuario eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findByEmail(email: string) {
    try{
      let user = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName','user.email','role.name','status.name'])
      .where("user.email = :email", { email })
      .getOne()
      if(!user) throw new AppError({ message: 'Error', httpCode: 400 });
      return user;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
    
}