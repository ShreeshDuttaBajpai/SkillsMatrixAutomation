import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg-image.jpg';
import homeimg1 from '../../../assests/homeimg1.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth.context';
import Cookies from 'universal-cookie';
import { ButtonComponent } from '../../ButtonComponent/ButtonComponent';
import { NavLink, useNavigate } from 'react-router-dom';

function HomePageMainComponent(props) {
  const { authSuccess } = useAuth();

  <script
    type="text/javascript"
    src="https://alcdn.msauth.net/lib/1.3.0/js/msal.js"
  ></script>;

  useEffect(() => {
    console.log(props.myData);
    if (props.myData)
      axios.post('https://localhost:7040/api/Emp', props.myData).then(res => {
        const token = res.data;
        const cookies = new Cookies();
        cookies.set('my_cookie', token);
        // window.location.reload();
      });
  }, [props.myData]);

  useEffect(() => {
    props.myData &&
      alert('Hello ' + props.myData.emp_name + ' ,Id- ' + props.myData.emp_id);
  }, [props.myData]);

  return (
    <div className={css.home}>
      <img className={css.bgHomePicture} src={bgHomePicture}></img>
      <div className={css.pageContent}>
        <div className={css.homeimg}>
          <img src={homeimg1}></img>
        </div>
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
                run={() => props.run}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainComponent;
