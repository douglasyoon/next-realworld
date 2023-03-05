import Link from 'next/link';
import AuthorInfo from './AuthorInfo';

const ArticlePreview = () => {
  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link href=''>
          <img src='http://i.imgur.com/N4VcUeJ.jpg' />
        </Link>
        <AuthorInfo />
        <button className='btn btn-outline-primary btn-sm pull-xs-right'>
          <i className='ion-heart'></i> 32
        </button>
      </div>
      <Link href='' className='preview-link'>
        <h1>
          The song you wont ever stop singing. No matter how hard you try.
        </h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className='tag-list'>
          <li className='tag-default tag-pill tag-outline'>Music</li>
          <li className='tag-default tag-pill tag-outline'>Song</li>
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
