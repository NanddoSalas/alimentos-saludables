import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomePage = () => (
  <>
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
