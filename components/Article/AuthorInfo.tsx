import Link from 'next/link';

const AuthorInfo = () => {
  return (
    <div className='info'>
      <Link href='' className='author'>
        Albert Paixs
      </Link>
      <span className='date'>January 20th</span>
    </div>
  );
};

export default AuthorInfo;
