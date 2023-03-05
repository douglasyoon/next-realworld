import ArticlePreview from '@/components/Article/ArticlePreview';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Conduit</title>
      </Head>
      <div className='home-page'>
        <div className='banner'>
          <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>A place href share your knowledge.</p>
          </div>
        </div>

        <div className='container page'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='feed-hrefggle'>
                <ul className='nav nav-pills outline-active'>
                  <li className='nav-item'>
                    <Link className='nav-link disabled' href=''>
                      Your Feed
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link active' href=''>
                      Global Feed
                    </Link>
                  </li>
                </ul>
              </div>
              <ArticlePreview />
            </div>

            <div className='col-md-3'>
              <div className='sidebar'>
                <p>Popular Tags</p>

                <div className='tag-list'>
                  <Link href='' className='tag-pill tag-default'>
                    programming
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    className
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    emberjs
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    angularjs
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    react
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    mean
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    node
                  </Link>
                  <Link href='' className='tag-pill tag-default'>
                    rails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
