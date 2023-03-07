import { isAxiosError } from 'axios';
import apiClient from './apiClient';
import {
  registerParams,
  loginParams,
  updateParams,
  IUser,
} from './../types/User';

export type registerDataType = Pick<IUser, 'username' | 'email' | 'password'>;

export type loginDataType = Pick<IUser, 'email' | 'password'>;

export const user = {
  register: async ({ username, email, password }: registerDataType) => {
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
  login: async ({ email, password }: loginDataType) => {
    try {
      const loginData: loginParams = {
        user: {
          email,
          password,
        },
      };
      const res = await apiClient.post('/users/login', loginData);
      return res;
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
