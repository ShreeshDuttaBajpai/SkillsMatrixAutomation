import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg-image.jpg';

function HomePageMainComponent() {
  return (
    <div className={css.home}>
      <img className={css.bgHomePicture} src={bgHomePicture}></img>
      <div className={css.pageContent}>
        <div className={css.homeLogo}>
          <img src={bglogo}></img>
          <div className={css.loginButton}>
            <button className={css.button1} type="submit">
              Continue With Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainComponent;
