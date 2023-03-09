import { IUserAuth } from './../../types/User';
import { atom, AtomEffect } from 'recoil';

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

export const userAtom = atom<IUserAuth>({
  key: 'user',
  default: {
    email: '',
    username: '',
    bio: '',
    image: '',
    token: '',
  },
  effects: [localStorageEffect<IUserAuth>('user')],
});
