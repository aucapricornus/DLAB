import { Status} from "./status.entity";
import { AppDataSource } from "../../database";
import { AppError } from '../../utils/AppError';
import { validate} from "class-validator";

const statusRepository = AppDataSource.getRepository(Status);


export class StatusService
{
  constructor(
  ){
  }
    
  public async findAll() {
    try {
      const status = await statusRepository.find();
      return status;
    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
    }
      
  }

  public async findById(id: number) {
    try {
      const status = await statusRepository.findOneBy({id});
      return status;
    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }

  public async create(post:Status){

    try {

      let status  = new Status();
      status.name = post.name; 
      const errors = await validate(status);

      if(errors.length > 0) {
        let errors_arr = [];
        for(let i of errors) {
          errors_arr.push(i.constraints);
        }
        let err = JSON.stringify(errors[0].constraints);
        throw new AppError({ message: err,httpCode: 409});
  
      } else {
      
          const status = await statusRepository.save(post);
          return post;
      }

    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }
  
  public async update(status: Status, id: number){
    try {
      const updateStatus = await statusRepository.update(id, status);
      return updateStatus;
    }catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }

  public async delete(id: number) {
    try {
      const deletedPost = await statusRepository.delete(id);
      return deletedPost;
    }catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}