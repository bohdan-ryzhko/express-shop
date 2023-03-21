import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import headerUrls from '../data/header_link';
import { Fragment } from 'react';
import { MainPage } from './MainPage/MainPage';

export const App = () => {
  return (
    <Fragment>
      <Header items={headerUrls} />
      <MainPage />
      <Footer />
    </Fragment>
  );
};
