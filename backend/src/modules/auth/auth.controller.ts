import { NextFunction,Response, Request } from "express";
import { AuthService } from "./auth.service";

export class AuthController{
  private authService: AuthService;
  
  constructor(){
    this.authService = new AuthService();
  }


  login = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const email: string = req.body['email'];
      const pass: string = req.body['password'];
      const data = await this.authService.login(email,pass);
      res.json(data);
    } catch(error){
      next(error);
    }
  }

  linkResetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const linkResetPassword = await this.authService.linkResetPassword(email)
      res.json(linkResetPassword);
    } catch (error) {
      next(error);
    }
  }
  
  resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.params.token;
      const password = req.body.password;
      const resetPassword = await this.authService.resetPassword(token, password);
      res.json(resetPassword);
    } catch (error) {
      next(error);
    }
  }

  changePassword = async (req: Request, res: Response, next: NextFunction) =>{
    try {

      const email = req.email
      const {oldPassword, newPassword}=req.body;
      const changePassword = await this.authService.changePassword(email,oldPassword,newPassword);
      res.json(changePassword)
    }catch (error){
      next(error)
    }
  }
}