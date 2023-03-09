import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [doc, setDoc] = useState<Document>();
  useEffect(() => {
    setDoc(document);
  }, []);
  if (doc) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <></>;
  }
};

export default Layout;
