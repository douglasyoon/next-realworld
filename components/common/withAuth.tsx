import useAuthData from '@/hooks/useAuthData';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const withAuth = (Component: NextPage | React.FC) => {
  const Auth = () => {
    const router = useRouter();
    const { isLogin } = useAuthData();
    if (isLogin) {
      return <Component />;
    } else {
      router.push('/');
    }
  };
  return Auth;
};

export default withAuth;
