import { NextFunction, Request, Response } from "express";
import { ToolService } from "./tool.service";
import { Tool } from "./tool.entity";

export class ToolController {
  private toolService: ToolService;
  
  constructor(){
    this.toolService = new ToolService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tools = await this.toolService.findAll();
      res.send(tools);
    } catch (error) {
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const tool = await this.toolService.findById(id);
      res.send(tool);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tool: Tool = req.body;
      const newTool = await this.toolService.create(tool);
      res.send(newTool);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tool: Tool = req.body;
      const id: number = Number(req.params['id']);
      const updatedTool = await this.toolService.update(id, tool);
      res.send(updatedTool);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const deletedTool = await this.toolService.delete(id);
      res.send(deletedTool);
    } catch (error) {
      next(error);
    }
  }
}
