import React from 'react';
import css from './HomepageMainComponent.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth.context';
import Cookies from 'universal-cookie';
import { ButtonComponent } from '../../ButtonComponent/ButtonComponent';
import { Redirect } from 'react-router-dom';
import wave from '../../../assests/wave3.png';
import grade from '../../../assests/grades.svg';
import avatar from '../../../assests/avatar2.svg';

const HomePageMainComponent = props => {
  // const { authSuccess } = useAuth();
  <script
    type="text/javascript"
    src="https://alcdn.msauth.net/lib/1.3.0/js/msal.js"
  ></script>;

  // useEffect(() => {
  //   if (props.myData)
  //     axios.post('https://localhost:7040/api/Emp', props.myData).then(res => {
  //       const token = res.data;
  //       const cookies = new Cookies();
  //       cookies.set('my_cookie', token);
  //       // window.location.reload();
  //       window.location = 'http://localhost:3000/Table';
  //     });
  // }, [props.myData]);

  // useEffect(() => {
  //   props.myData;
  // }, [props.myData]);

  return (
    <div className={css.homes}>
      <img className={css.wave} src={wave} />
      <div className={css.container}>
        <div className={css.img}>
          <img src={grade} />
        </div>
        <div className={css.login}>
          <div className={css.forms}>
            <img src={avatar} />
            <h2>Welcome!</h2>
            <div className={css.loginButton}>
              {/* {authSuccess === true ? (
                <Redirect to="/Table" />
              ) : ( */}
              <ButtonComponent
                cname={css.button1}
                value="Continue With Microsoft"
                // run={() => props.ContinueWithMicrosoft()}
              />
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMainComponent;
