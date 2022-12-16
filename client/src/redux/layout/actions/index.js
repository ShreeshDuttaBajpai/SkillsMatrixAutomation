import * as types from 'rootpath/redux/common/constants/ActionTypes';

export const initLayout = () => ({
  type: types.ON_INIT
});

export const toggleFullscreen = () => ({
  type: types.TOGGLE_DESKTOP
});


export const run =()=>{
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
  let loginResponse = client.loginPopup(request);
  // console.dir(loginResponse);
  let tokenResponse = client.acquireTokenSilent(request);
  // console.dir(tokenResponse);
  let payload =  fetch('https://graph.microsoft.com/beta/me', {
    headers: {
      Authorization: 'Bearer ' + tokenResponse.accessToken
    }
  });
  let json = payload.json();

  setmyData(() => {
    return {
      emp_id: json.employeeId,
      emp_name: json.displayName,
      emp_designation: json.jobTitle
    };
  });
  //console.log(json.displayName,json.employeeId,json.jobTitle);
  // window.location.reload();
}
