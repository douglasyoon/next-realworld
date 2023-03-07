import { loginDataType, user } from '@/api/userApi';
import Button from '@/components/common/Button';
import ErrorMessages, { ErrorType } from '@/components/common/ErrorMessages';
import Input from '@/components/common/Input';
import useAuthData from '@/hooks/useAuthData';
import { IUserStore, userAtom } from '@/stores/user/atom';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<ErrorType>({});
  const setUserStore = useSetRecoilState<IUserStore>(userAtom);

  const { isLogin } = useAuthData();
  isLogin && router.push('/');

  const { isLoading, mutate } = useMutation(user.login, {
    onSuccess: (res) => {
      if (res) {
        const { status, data } = res;
        if (status === 200) {
          setUserStore(data.user);
          router.push('/');
        } else if (data.errors) {
          setErrors(data.errors);
        }
      }
    },
  });

  const onSumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginFormData = new FormData(e.currentTarget);
    const loginData: loginDataType = {
      email: loginFormData.get('email') as string,
      password: loginFormData.get('password') as string,
    };
    mutate(loginData);
  };

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign in</h1>
            <p className='text-xs-center'>
              <Link href='/register'>Need an account?</Link>
            </p>

            <ErrorMessages errors={errors} />

            <form onSubmit={onSumbitHandler}>
              <fieldset className='form-group'>
                <Input
                  type='text'
                  size='lg'
                  placeholder='Email'
                  name='email'
                  disabled={isLoading}
                />
              </fieldset>
              <fieldset className='form-group'>
                <Input
                  type='password'
                  size='lg'
                  placeholder='Password'
                  name='password'
                  disabled={isLoading}
                />
              </fieldset>
              <Button>Sign in</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
