import conf from '../conf'
import {Client, Account, ID} from 'appwrite'

export class Authentication {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async createAccount ({email, password, name}){
        try {
            const userAcc = await this.account.create(ID.unique, email, password, name);
            if(userAcc){
                this.login({email,password})
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        };
    }

    async lgout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            
        }
    }

}

const authService = new Authentication();

export default authService;