import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign up</h1>
            <p className='text-xs-center'>
              <Link href='/login'>Have an account?</Link>
            </p>

            <ul className='error-messages'>
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className='form-group'>
                <Input type='text' size='lg' placeholder='Your Name' />
              </fieldset>
              <fieldset className='form-group'>
                <Input type='text' size='lg' placeholder='Email' />
              </fieldset>
              <fieldset className='form-group'>
                <Input type='password' size='lg' placeholder='Password' />
              </fieldset>
              <Button>Sign up</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
