import { user } from '@/api/userApi';
import Button from '@/components/common/Button';
import ErrorMessages, { ErrorType } from '@/components/common/ErrorMessages';
import Input from '@/components/common/Input';
import { IUserStore, userAtom } from '@/stores/user/atom';
import { useMutation } from '@tanstack/react-query';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<ErrorType>({});
  const setUserStore = useSetRecoilState<IUserStore>(userAtom);

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

  const onSumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerData = {
      username,
      email,
      password,
    };
    mutate(registerData);
  };
  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
                    value={username}
                    onChangeEvent={onChangeUserName}
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Input
                    type='text'
                    size='lg'
                    placeholder='Email'
                    value={email}
                    onChangeEvent={onChangeEmail}
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Input
                    type='password'
                    size='lg'
                    placeholder='Password'
                    value={password}
                    onChangeEvent={onChangePassword}
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
