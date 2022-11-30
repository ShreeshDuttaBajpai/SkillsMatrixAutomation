import React from 'react';
import css from './HomepageMainComponent.css';
import bglogo from '../../../assests/homeLogo.png';
import bgHomePicture from '../../../assests/bg-image.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import * as Msal from 'msal';

function HomePageMainComponent() {
  const [myData, setmyData] = useState()

  useEffect(()=>{
      axios.post("https://localhost:7040/api/Emp",myData)
      // .then((res)=> setmyData(res.data)
      // );
  });
  
  <script type='text/javascript' src='https://alcdn.msauth.net/lib/1.3.0/js/msal.js'></script>
  async function run(){
      console.log("running...");
      const config={
      auth :{
        clientId:'addbbf7a-a97c-40e0-a662-37646b433007',
        authority: 'https://login.microsoftonline.com/common/',
        redirectUri: 'http://localhost:3000/Home'
      }
    };
    var client =new Msal.UserAgentApplication(config);
    var request ={
      scopes:['user.read']
    };
    let loginResponse= await client.loginPopup(request);
    // console.dir(loginResponse);
    let tokenResponse =await client.acquireTokenSilent(request);
    // console.dir(tokenResponse);
    let payload= await fetch("https://graph.microsoft.com/beta/me",{
      headers:{
        'Authorization' : 'Bearer ' + tokenResponse.accessToken
      }
    });
    let json = await payload.json();
    setmyData(() => {
      return {
          emp_id: json.employeeId,
          emp_name: json.displayName,
          emp_designation: json.jobTitle
      };
  });
    //console.log(json.displayName,json.employeeId,json.jobTitle);
  }

  useEffect(() => {
    myData && alert("Hello " + myData.emp_designation);
  }, [myData])

  

  return (
    <div className={css.home}>
      <img className={css.bgHomePicture} src={bgHomePicture}></img>
      <div className={css.pageContent}>
        <div className={css.homeLogo}>
          <img className={css.bglogo} src={bglogo}></img>
          <div className={css.loginButton}  >
            <button className={css.button1} type="submit" onClick={run}>
              Continue With Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMainComponent;
