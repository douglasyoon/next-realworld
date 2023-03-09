import { updateDataType, user } from '@/api/userApi';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import withAuth from '@/components/common/withAuth';
import { userAtom } from '@/stores/user/atom';
import { IUserAuth } from '@/types/User';
import { useMutation, useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useStateProxy } from 'use-state-proxy';

interface ISettingData {
  user: {
    [index: string]: string;
  };
}

const Settings = () => {
  const router = useRouter();
  const setUserStore = useSetRecoilState<IUserAuth>(userAtom);
  const resetUserStore = useResetRecoilState(userAtom);
  const state: ISettingData = useStateProxy({
    user: {
      email: '',
      username: '',
      password: '',
      bio: '',
      image: '',
      token: '',
    },
  });
  const { isLoading } = useQuery(['user'], user.get, {
    onSuccess: (res) => {
      state.user = { ...state.user, ...res.user };
    },
  });
  const { mutate, isLoading: isUpdateLoading } = useMutation(user.update, {
    onSuccess: (res) => {
      if (res) {
        state.user = { ...state.user, ...res.user };
        setUserStore(res.user);
      }
    },
  });
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateData: updateDataType = {
      email: state.user.email,
      password: state.user.password,
      username: state.user.username,
      bio: state.user.bio,
      image: state.user.image,
    };
    mutate(updateData);
  };

  const onLogoutHanlder = () => {
    resetUserStore();
    router.push('/');
  };

  const onChangeSettings = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    state.user[e.target.name] = e.target.value;
  };

  return (
    <>
      <Head>
        <title>Settings - Conduit</title>
      </Head>
      <div className='settings-page'>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 col-xs-12'>
              <h1 className='text-xs-center'>Your Settings</h1>
              <form onSubmit={onSubmitHandler}>
                <fieldset>
                  <fieldset className='form-group'>
                    <Input
                      type='text'
                      placeholder='URL of profile picture'
                      value={state.user.image}
                      name='image'
                      onChangeEvent={onChangeSettings}
                    />
                  </fieldset>
                  <fieldset className='form-group'>
                    <Input
                      type='text'
                      size='lg'
                      placeholder='Your Name'
                      value={state.user.username}
                      name='username'
                      onChangeEvent={onChangeSettings}
                    />
                  </fieldset>
                  <fieldset className='form-group'>
                    <Textarea
                      size='lg'
                      rows={8}
                      placeholder='Short bio about you'
                      value={state.user.bio || ''}
                      name='bio'
                      onChangeEvent={onChangeSettings}
                    />
                  </fieldset>
                  <fieldset className='form-group'>
                    <Input
                      type='text'
                      size='lg'
                      placeholder='Email'
                      value={state.user.email}
                      name='email'
                      onChangeEvent={onChangeSettings}
                    />
                  </fieldset>
                  <fieldset className='form-group'>
                    <Input
                      type='password'
                      size='lg'
                      placeholder='Password'
                      name='password'
                      onChangeEvent={onChangeSettings}
                    />
                  </fieldset>
                  <Button disabled={isUpdateLoading}>Update Settings</Button>
                </fieldset>
              </form>
              <hr />
              <button
                className='btn btn-outline-danger'
                onClick={onLogoutHanlder}
              >
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Settings);
