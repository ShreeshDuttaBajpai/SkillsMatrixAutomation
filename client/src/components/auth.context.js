import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as Msal from 'msal';

const AuthContext = createContext(null);

export const AuthProvider = props => {
  const [userToken, setUserToken] = useState(props.tokenData);
  const [authSuccess, setAuthSuccess] = useState(false);
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
        console.log('gagan')
        setAuthSuccess(false);
      }
    };
    authUser();
  }, [userToken]);

  const logout = async() => {
    const cookies = new Cookies();
    const decoded=await jwt_decode(userToken);
    cookies.remove('my_cookie');
    await axios.delete(`https://localhost:7040/api/Emp/${decoded.Emp_id}`);
    setAuthSuccess(false);
    window.location = "http://localhost:3000/"
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
    let tokenResponse = await client.acquireTokenSilent(request);
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
        emp_designation: json.jobTitle,
        emp_firstname:json.givenName
      };
    });
  }

  return (
    <AuthContext.Provider
      value={{ userToken, setUserToken, authSuccess, run, logout, myData }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
