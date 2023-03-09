import { isAxiosError } from 'axios';
import authClient from './authClient';
import apiClient from './apiClient';
import {
  registerParams,
  loginParams,
  updateParams,
  IUser,
  IUserAuth,
} from './../types/User';

export type registerDataType = Pick<IUser, 'username' | 'email' | 'password'>;
export type loginDataType = Pick<IUser, 'email' | 'password'>;
export type updateDataType = Pick<
  IUser,
  'email' | 'password' | 'username' | 'bio' | 'image'
>;

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
      const res = await authClient.post('/users', registerData);
      return res;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response;
      } else {
        return new Error('Unknown Error');
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
      const res = await authClient.post('/users/login', loginData);
      console.log(res);
      return res;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        return error.response;
      } else {
        return new Error('Unknown Error');
      }
    }
  },
  get: async () => {
    try {
      const res = await apiClient.get('/user');
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        return error.response;
      } else {
        return new Error('Unknown Error');
      }
    }
  },
  update: async ({ email, password, username, bio, image }: updateDataType) => {
    try {
      const updateData: updateParams = {
        user: {
          email,
          password,
          username,
          bio,
          image,
        },
      };
      const res = await apiClient.put('/user', updateData);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        return error.response;
      } else {
        return new Error('Unknown Error');
      }
    }
  },
};
