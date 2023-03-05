import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

const Button = ({ type, children }: Props) => {
  return (
    <button type={type} className='btn btn-lg btn-primary pull-xs-right'>
      {children}
    </button>
  );
};

export default Button;
