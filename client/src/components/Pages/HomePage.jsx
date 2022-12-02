import React from 'react';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import HomePageMainComponent from '../HomePage/HomePageMainComponent/HomePageMainComponent';
import Navbar from '../Navbar/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageMainComponent />
    </>
  );
}

export default HomePage;
