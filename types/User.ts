export interface User {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
}

export interface registerParams {
  user: Pick<User, 'username' | 'email' | 'password'>;
}

export interface loginParams {
  user: Pick<User, 'email' | 'password'>;
}

export interface updateParams {
  user: User;
}
