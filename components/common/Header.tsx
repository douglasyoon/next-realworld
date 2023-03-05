import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>
          conduit
        </Link>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <Link
              className={`nav-link ${router.pathname === '/' && 'active'}`}
              href='/'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${
                router.pathname === '/editor' && 'active'
              }`}
              href='/editor'
            >
              <i className='ion-compose'></i>&nbsp;New Article
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${
                router.pathname === '/settings' && 'active'
              }`}
              href='/settings'
            >
              <i className='ion-gear-a'></i>&nbsp;Settings
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${router.pathname === '/login' && 'active'}`}
              href='/login'
            >
              Sign in
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={`nav-link ${
                router.pathname === '/register' && 'active'
              }`}
              href='/register'
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
