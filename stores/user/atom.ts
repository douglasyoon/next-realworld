import { atom, AtomEffect } from 'recoil';

export interface IUserStore {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const userAtom = atom<IUserStore>({
  key: 'user',
  default: {
    email: '',
    username: '',
    bio: '',
    image: '',
    token: '',
  },
  effects: [localStorageEffect<IUserStore>('user')],
});
