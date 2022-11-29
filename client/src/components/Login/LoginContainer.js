// import React from 'react';
// import Login from './Login';
// //<script type="text/javascript" src="https://alcdn.msauth.net/lib/1.3.0/js/msal.js"></script>
// function LoginContainer() {
//     <script type='text/javascript' src='https://alcdn.msauth.net/lib/1.3.0/js/msal.js'></script>
//   return (
//     async function run(){
//         console.log("running...");
//         const config={
//         auth :{
//           clientId:'addbbf7a-a97c-40e0-a662-37646b433007',
//           authority: 'https://login.microsoftonline.com/common/',
//           redirectUri: 'http://localhost:8080'
//         }
//       };
//       var client =new Msal.UserAgentApplication(config);
//       var request ={
//         scopes:['user.read']
//       };
//       let loginResponse= await client.loginPopup(request);
//       // console.dir(loginResponse);
//       let tokenResponse =await client.acquireTokenSilent(request);
//       // console.dir(tokenResponse);
//       let payload= await fetch("https://graph.microsoft.com/beta/me",{
//         headers:{
//           'Authorization' : 'Bearer ' + tokenResponse.accessToken
//         }
//       });
//       let json = await payload.json();
//       console.log(json.displayName,json.employeeId,json.jobTitle);
//     }
//   )
// }

// export default LoginContainer