import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

const HomePage = () => (
  <>
    <Seo />
    <Header
      bottom={({ openSearch, navigateRandom }) => (
        <Hero onClickSearch={openSearch} onClickRandom={navigateRandom} />
      )}
    />
    <Categories />
    <Footer />
  </>
);

export default HomePage;
