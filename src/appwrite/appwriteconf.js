/* eslint-disable no-useless-catch */
import conf from "../conf/conf.js";
import { Client, Account, Databases, Storage,ID,Query} from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createUser({name,latitude,longitude,isIrrigated}){
    try{
      const createdUser  =  await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        ID.unique(),
        {name,latitude,longitude,isIrrigated}
      )
      return createdUser
    }catch(error){
      
      throw error;
    }
 }

 async createCrop({cropName,cropDescription,cropQuantity,cropMinPrice,userId}){
    try{
      const createdCrop = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCropCollectionId,
        ID.unique(),
        {cropName,cropDescription,cropQuantity,cropMinPrice,userId}
      )
    }catch(error){
      throw error;
    }
 }

 async showAllCrops(){
  try{
    const bestMatch =  await this.database.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCropCollectionId,
    );
    return bestMatch

  }catch(error){
    throw error;
  }
 }

 async deleteCrop(cropId){
  try{
    const deletedCrop = await this.database.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCropCollectionId,
      cropId
    );
    
    return deletedCrop
  }catch(error){
    console.log(error);
    throw error;
  }
 }

async getBestMatches(){
  try{

    return await this.database.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteBestmatchCollectionId,
      
    )
  }catch(error){
    throw error;
  }
}
  
 

}
const service = new Service();
export default service;