import React from 'react'
import * as Msal from 'msal';
import css from "./Login.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Login() {
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
          redirectUri: 'http://localhost:3000/Login'
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
  return (
        // <div className="container1">
        // <button onClick={run} >Run code</button>
        // </div>
        <div className={css.container1}>
        <div className={css.form1}>
            <div className={css.banner1}>
                <h1>Hello There!</h1>
                <p>Enter your details and start the journey with Connect Wise</p>
            </div>
            <div className={css.bg1}>
                {/* <button type="button">LEARN MORE</button> */}
             
                <a href="https://bhavnacorp.com/">
                    <button type="button" className={css.button1} >VISIT US</button>
                </a>

            </div>
            <form className="css.signupform1">
                <h1 className={css.head}>Get Started</h1>
               
                <p className={css.para}>CLick here to continue</p>
               
                <button type="button" onClick={run} className={css.btn}>SIGN UP</button> 
            </form>
        </div>
    </div>
  )
}

export default Login

