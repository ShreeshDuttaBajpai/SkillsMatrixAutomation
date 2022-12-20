import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg-image.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth.context';
import Cookies from 'universal-cookie';
import { ButtonComponent } from '../../ButtonComponent/ButtonComponent';
import {useNavigate} from "react-router-dom";

function HomePageMainComponent() {
  const { run, myData, authSuccess } = useAuth();
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
        window.location.reload();
      });
  }, [myData]);

  useEffect(() => {
    myData && alert('Hello ' + myData.emp_name + ' ,Id- ' + myData.emp_id);
    // myData && navigate("/Table");
  }, [myData]);

  return (
    <div className={css.home}>
      <img className={css.bgHomePicture} src={bgHomePicture}></img>
      <div className={css.pageContent}>
        <div className={css.homeLogo}>
          <img src={bglogo}></img>
          <div className={css.loginButton}>
            {authSuccess === true ? (
              <h3 className={css.welcomeMessage}>
                Welcome to Automation Tool for Story Tracker
              </h3>
            ) : (
              <ButtonComponent
                cname={css.button1}
                value="Continue With Microsoft"
                run={run}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainComponent;
