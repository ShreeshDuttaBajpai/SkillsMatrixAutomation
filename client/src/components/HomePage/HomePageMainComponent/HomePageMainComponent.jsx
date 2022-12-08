import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg-image.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth.context';
import Cookies from 'universal-cookie';
import { ButtonComponent } from '../../ButtonComponent/ButtonComponent';
// import { useNavigate, Link } from 'react-router-dom';

function HomePageMainComponent() {
  const { run, myData } = useAuth();
  // const navigate = useNavigate();

  <script
    type="text/javascript"
    src="https://alcdn.msauth.net/lib/1.3.0/js/msal.js"
  ></script>;

  useEffect(() => {
    console.log(myData);
    if (myData)
      axios.post('https://localhost:7040/api/Emp', myData).then(res => {
        const token = res.data;
        const cookies = new Cookies();
        cookies.set('my_cookie', token);
        // navigate('/Home');
      });
  }, [myData]);

  useEffect(() => {
    myData && alert('Hello ' + myData.emp_name + ' ,Id- ' + myData.emp_id);
  }, [myData]);

  return (
    <div className={css.home}>
      <img className={css.bgHomePicture} src={bgHomePicture}></img>
      <div className={css.pageContent}>
        <div className={css.homeLogo}>
          <img src={bglogo}></img>
          <div className={css.loginButton}>
            <ButtonComponent
              cname={css.button1}
              value="Continue With Microsoft"
              run={run}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainComponent;
