import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg8.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth.context';
import Cookies from 'universal-cookie';
import { ButtonComponent } from '../../ButtonComponent/ButtonComponent';
import { Redirect } from 'react-router-dom';
import { continueWithMicrosoft } from './homePageFunctions';
import wave from "../../../assests/wave3.png"
import grade from "../../../assests/grades.svg"
import avatar from "../../../assests/avatar2.svg"

const HomePageMainComponent = ({ ContinueWithMicrosoft, myData }) => {
  const { authSuccess } = useAuth();
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
    myData;
  }, [myData]);

  return (
    // <div className={css.home}>
    //   <img className={css.bgHomePicture} src={bgHomePicture}></img>
    //   <div className={css.pageContent}>
    //     <div className={css.homeLogo}>
    //       <img src={bglogo}></img>
    //       <div className={css.loginButton}>
    //         {authSuccess === true ? (
    //           <Redirect to="/Table" />
    //         ) : (
    //           <ButtonComponent
    //             cname={css.button1}
    //             value="Continue With Microsoft"
    //             run={() => ContinueWithMicrosoft()}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>


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
              {authSuccess === true ? (
                <Redirect to="/Table" />
              ) : (
                <ButtonComponent
                  cname={css.button1}
                  value="Continue With Microsoft"
                  run={() => ContinueWithMicrosoft()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMainComponent;
