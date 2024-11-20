import { httpClient } from "../axios.config";

interface IuseAuthType {
    username: string;
    password: string;
}

export const useAuth = {
    signin: (data: IuseAuthType) => httpClient.post('/auth/login', data)
};