import { httpClient } from "../axios.config";

interface IuseAuthType {
    username:string
    password:string
}

export const useAuth = {
 signin: async (data:IuseAuthType)=> httpClient.post('/auth/login', data)
    
}