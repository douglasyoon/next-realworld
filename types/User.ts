export interface IUser {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
}

export interface registerParams {
  user: Pick<IUser, 'username' | 'email' | 'password'>;
}

export interface loginParams {
  user: Pick<IUser, 'email' | 'password'>;
}

export interface updateParams {
  user: IUser;
}
