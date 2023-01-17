import { connect } from 'react-redux';
import { myData } from '../../../redux/common/actions';
import * as Msal from 'msal';
import HomePageMainComponent from './HomePageMainComponent';

const mapStateToProps = state => ({
    myData: state.authUser.myData,
  });
  console.log(myData);
const mapDispatchToProps = dispatch => {
    return {
         run: async()=> {
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
          } 
        }
    }
const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageMainComponent);
export default HomePageContainer;