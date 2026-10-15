import { AppDataSource } from "../../database";
import { AppError } from "../../utils/AppError";
import { Tool } from "./tool.entity";

const toolRepository = AppDataSource.getRepository(Tool);

export class ToolService {
  public async findAll() {
    try {
      const tools = await toolRepository.find();
      return tools;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    try {
      const tool = await toolRepository.findOneBy({id});
      return tool;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(tool: Tool) {
    try {
      const newTool = await toolRepository.save(tool);
      return newTool;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, tool: Tool) {
    try {
      await toolRepository.update(id, tool);
      const updatedTool = await toolRepository.findOneBy({id});
      return updatedTool;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const toolToDelete = await toolRepository.findOneBy({id});
      await toolRepository.delete(id);
      return toolToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
