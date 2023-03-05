import ArticlePreview from '@/components/Article/ArticlePreview';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className='profile-page'>
      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>
              <img src='http://i.imgur.com/Qr71crq.jpg' className='user-img' />
              <h4>Eric Simons</h4>
              <p>
                Cofounder @GoThinkster, lived in Aols HQ for a few months, kinda
                looks like Peeta from the Hunger Games
              </p>
              <button className='btn btn-sm btn-outline-secondary action-btn'>
                <i className='ion-plus-round'></i>
                &nbsp; Follow Eric Simons
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <div className='articles-toggle'>
              <ul className='nav nav-pills outline-active'>
                <li className='nav-item'>
                  <Link className='nav-link active' href=''>
                    My Articles
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href=''>
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>

            <ArticlePreview />
            <ArticlePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
