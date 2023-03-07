import { registerDataType, user } from '@/api/userApi';
import Button from '@/components/common/Button';
import ErrorMessages, { ErrorType } from '@/components/common/ErrorMessages';
import Input from '@/components/common/Input';
import useAuthData from '@/hooks/useAuthData';
import { IUserStore, userAtom } from '@/stores/user/atom';
import { useMutation } from '@tanstack/react-query';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Register = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<ErrorType>({});
  const setUserStore = useSetRecoilState<IUserStore>(userAtom);

  const { isLogin } = useAuthData();
  isLogin && router.push('/');

  const { isLoading, mutate } = useMutation(user.register, {
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

  const onSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registerFormData = new FormData(event.currentTarget);
    const registerData: registerDataType = {
      username: registerFormData.get('username') as string,
      email: registerFormData.get('email') as string,
      password: registerFormData.get('password') as string,
    };
    mutate(registerData);
  };

  return (
    <>
      <Head>
        <title>Sign up - Conduit</title>
      </Head>
      <div className='auth-page'>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 col-xs-12'>
              <h1 className='text-xs-center'>Sign up</h1>
              <p className='text-xs-center'>
                <Link href='/login'>Have an account?</Link>
              </p>

              <ErrorMessages errors={errors} />

              <form onSubmit={onSumbitHandler}>
                <fieldset className='form-group'>
                  <Input
                    type='text'
                    size='lg'
                    placeholder='Your Name'
                    name='username'
                    disabled={isLoading}
                  />
                </fieldset>
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
                <Button>Sign up</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
