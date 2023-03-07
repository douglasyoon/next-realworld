import { useRecoilValue } from 'recoil';
import { IUserStore, userAtom } from '@/stores/user/atom';

const useAuthData = () => {
  const user = useRecoilValue<IUserStore>(userAtom);
  const isLogin = user.token !== '';
  return { user, isLogin };
};

export default useAuthData;
