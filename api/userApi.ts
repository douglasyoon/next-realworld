import { isAxiosError } from 'axios';
import apiClient from './apiClient';
import { registerParams, loginParams, updateParams } from './../types/User';

interface registerData {
  username: string;
  email: string;
  password: string;
}

interface loginData {
  email: string;
  password: string;
}

export const user = {
  register: async ({ username, email, password }: registerData) => {
    try {
      const registerData: registerParams = {
        user: {
          username,
          email,
          password,
        },
      };
      const res = await apiClient.post('/users', registerData);
      return res;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response;
      }
    }
  },
  login: async ({ email, password }: loginData) => {
    try {
      const loginData: loginParams = {
        user: {
          email,
          password,
        },
      };
      const res = await apiClient.post('/users/login', loginData);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response;
      }
    }
  },
  get: () => {
    return apiClient.get('/user');
  },
  update: (updateInfo: updateParams) => {
    return apiClient.put('/user', updateInfo);
  },
};
