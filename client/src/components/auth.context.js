import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as Msal from 'msal';

const AuthContext = createContext(null);

export const AuthProvider = props => {
  const [userToken, setUserToken] = useState(props.tokenData);
  const [authSuccess, setAuthSuccess] = useState();
  const [myData, setmyData] = useState();

  useEffect(() => {
    const authUser = async () => {
      try {
        const decoded = await jwt_decode(userToken);
        await axios
          .get(`https://localhost:7040/api/Emp/${decoded.Emp_id}`)
          .then(res => {
            if (res.status === 200) {
              setAuthSuccess(true);
            } else setAuthSuccess(false);
          });
      } catch (error) {
        setAuthSuccess(false);
      }
    };
    authUser();
  }, [userToken]);

  const logout = async Emp_id => {
    const cookies = new Cookies();
    cookies.remove('my_cookie');
    await axios.delete(`https://localhost:7040/api/Emp/${Emp_id}`);
    window.location.reload();
  };

  async function run() {
    console.log('running...');
    const config = {
      auth: {
        clientId: 'addbbf7a-a97c-40e0-a662-37646b433007',
        authority: 'https://login.microsoftonline.com/common/',
        redirectUri: 'http://localhost:3000/Home'
      }
    };
    var client = new Msal.UserAgentApplication(config);
    var request = {
      scopes: ['user.read']
    };
    let loginResponse = await client.loginPopup(request);
    // console.dir(loginResponse);
    let tokenResponse = await client.acquireTokenSilent(request);
    // console.dir(tokenResponse);
    let payload = await fetch('https://graph.microsoft.com/beta/me', {
      headers: {
        Authorization: 'Bearer ' + tokenResponse.accessToken
      }
    });
    let json = await payload.json();

    setmyData(() => {
      return {
        emp_id: json.employeeId,
        emp_name: json.displayName,
        emp_designation: 'Engineering Manager'
      };
    });
    //console.log(json.displayName,json.employeeId,json.jobTitle);
    // window.location.reload();
  }

  return (
    <AuthContext.Provider
      value={{ userToken, setUserToken, authSuccess, logout, run, myData }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
