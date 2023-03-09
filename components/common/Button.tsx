import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ type, children, disabled }: Props) => {
  return (
    <button
      type={type}
      className='btn btn-lg btn-primary pull-xs-right'
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
