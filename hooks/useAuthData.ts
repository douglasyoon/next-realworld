import { IUserAuth } from './../types/User';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/stores/user/atom';

const useAuthData = () => {
  const user = useRecoilValue<IUserAuth>(userAtom);
  const isLogin = user.token !== '';
  return { user, isLogin };
};

export default useAuthData;
