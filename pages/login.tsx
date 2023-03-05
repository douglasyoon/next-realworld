import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign in</h1>
            <p className='text-xs-center'>
              <Link href='/register'>Need an account?</Link>
            </p>

            <ul className='error-messages'>
              <li>Something Wrong</li>
            </ul>

            <form>
              <fieldset className='form-group'>
                <Input type='text' size='lg' placeholder='Email' />
              </fieldset>
              <fieldset className='form-group'>
                <Input type='password' size='lg' placeholder='Password' />
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
