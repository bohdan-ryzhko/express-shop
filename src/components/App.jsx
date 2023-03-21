import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';
import { MainPage } from './MainPage/MainPage';

import headerUrls from '../data/header_link';

export const App = () => {
  return (
    <Fragment>
      <Header items={headerUrls} />
      <MainPage />
      <Footer />
    </Fragment>
  );
};
