import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import headerUrls from '../data/header_link';
import { Fragment } from 'react';

export const App = () => {
  return (
    <Fragment>
      <Header items={headerUrls} />
      <Footer />
    </Fragment>
  );
};
