import conf from '../conf/conf.js';
import { Client,Account,ID } from 'appwrite';
import service from './appwriteconf.js';

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
       try{
        const userAccount = await this.account.create(ID.unique(),email,password,name);
       
        return userAccount
       
       }catch(error){
        console.log("Appwrite Service ::Create Account ::Error",error);
        throw error;
       }
    }
    async loginUser({email,password}){
        try{
            const loginUserData = await this.account.createEmailPasswordSession(email,password);
            return loginUserData;
        }catch(error){
            console.log("Appwrite service errror",error);
        }
    }
    async getCurrentUser(){
        try{

          return await this.account.get();
        }catch(error){
            console.log("Appwrite Error :: getCurrent user")
            throw error;
        }

        
     }

    
   

     async logOut(){
        try{
         return await this.account.deleteSessions();

        }catch(error){
            console.log("Appwrite Service Error :: logout  ",error)
        }
     }
}

const authService = new AuthService();


export default authService;