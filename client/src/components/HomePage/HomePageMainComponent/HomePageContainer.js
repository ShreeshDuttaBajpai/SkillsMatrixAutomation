import { connect } from 'react-redux';
import { authSuccess, myData } from '../../../redux/common/actions';
import * as Msal from 'msal';
import HomePageMainComponent from './HomePageMainComponent';
import { authUser } from '../../../redux/common/reducers';

const mapStateToProps = state => ({
  myData: state.authUser.myData,
  authSuccess :state.authUser.authSuccess
  });
  console.log(myData);
const mapDispatchToProps = dispatch => {
    return {
         continueWithMicrosoft: async()=> {
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
            let response = await fetch('https://graph.microsoft.com/beta/me', {
              headers: {
                Authorization: 'Bearer ' + tokenResponse.accessToken
              }
            });
            let json = await response.json();
            console.log(json);
            dispatch(myData(json));        
          },
      
      authUser: async () => {
        try {
        const decoded = await jwt_decode(userToken);
        await axios
          .get(`https://localhost:7040/api/Emp/${decoded.Emp_id}`)
          .then(res => {
            if (res.status === 200) {
              dispatch(authSuccess(true));
            } else dispatch(authSuccess(false));
          });
      } catch (error) {
        console.log('gagan')
        dispatch(authSuccess(false));
        }
        // authUser();
      }
    }
}
    
const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageMainComponent);
export default HomePageContainer;