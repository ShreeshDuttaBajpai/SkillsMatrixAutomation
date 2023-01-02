import React from 'react';
// import ButtonContainer from '../components/ButtonComponent/ButtonContainer';
import HomepageMainComponent from '../components/HomePage/HomePageMainComponent/HomepageMainComponent';
import Navbar from '../components/Navbar/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      {/* <ButtonContainer /> */}
      <HomepageMainComponent />
    </>
  );
}

export default HomePage;
