import conf from '../conf'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Services{
    client = new Client();
    databases;
    bucket

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }
    async updatePost(slug,{title, content, status}){
        try {
            return await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                [
                    Query.equal("status","active")
                ]
            )
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    //upload files

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.bucketId,
                fileID
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    getFilePreview (fileID){
        try {
            return this.bucket.getFilePreview(
                conf.bucketId,
                fileID
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }
}