import { NextFunction, Request, Response } from "express";
import { DevLanguagesService } from "./devLanguages.service";
import { DevLanguages } from "./devLanguages.entity";

export class DevLanguagesController{

  private devLanguagesService: DevLanguagesService;

  constructor(){
    this.devLanguagesService = new DevLanguagesService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const devLanguages = await this.devLanguagesService.findAll();
      res.send(devLanguages);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const devLanguage = await this.devLanguagesService.findById(id);
      res.send(devLanguage);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const devLanguage:DevLanguages = req.body;
      const newDevLanguage = await this.devLanguagesService.create(devLanguage);
      res.send(newDevLanguage);
    }catch(err) {
      next(err);
    }
  }
  
  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const devLanguage:DevLanguages = req.body;
      const id: number = Number(req.params['id']);
      const updateDevLanguage = await this.devLanguagesService.update(id, devLanguage);
      res.send(updateDevLanguage);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteDevLanguage = await this.devLanguagesService.delete(Number(id));
      res.send(deleteDevLanguage);
    }catch(error){
      next(error);
    }
  }
}