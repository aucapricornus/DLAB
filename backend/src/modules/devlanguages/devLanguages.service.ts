import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { DevLanguages } from "./devLanguages.entity"

const devLangaugeRepository = AppDataSource.getRepository(DevLanguages);

export class DevLanguagesService{

  async findAll(){
    try{
      const DevLanguages = await devLangaugeRepository.find();
      return DevLanguages;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById( id: number){
    try{
      const devLanguage = await devLangaugeRepository.findOneBy({id});
      return devLanguage;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(devLanguage: DevLanguages){
    console.log('service'+ devLanguage);
    try{
      const newdevLanguage = await devLangaugeRepository.save(devLanguage);
      return newdevLanguage;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async update(id: number, devLanguage: DevLanguages){
    try{
      await devLangaugeRepository.update(id, devLanguage);
      return "devLanguage actualizado correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  async delete(id: number) {
    try{
      await devLangaugeRepository.delete(id);
      return "devLanguage eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}