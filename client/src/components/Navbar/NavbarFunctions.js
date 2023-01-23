import { authSuccess, userToken } from '../../redux/common/actions';
// import * as Msal from 'msal';
// import HomePageMainComponent from './HomePageMainComponent';

import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
// const decoded = await jwt_decode(userToken);

export const authorizeUser = () => {
    useEffect(() => {
    const authUser = async () => {
      try {
        const decoded = await jwt_decode(userToken);
        await axios
          .get(`https://localhost:7040/api/Emp/${decoded.Emp_id}`)
          .then(res => {
            if (res.status === 200) {
              dispatch(authSuccess);
            }
            // else setAuthSuccess(false);
          });
      } catch (error) {
        console.log('gagan')
        // dispatch(authSuccess===false);
      }
    };
    authUser();
  }, [userToken]);
}

export const logout = async () => {
    // console.log('Shreesh!');
    const cookies = new Cookies();
    const decoded = await jwt_decode(userToken);
    cookies.remove('my_cookie');
    await axios.delete(`https://localhost:7040/api/Emp/${decoded.Emp_id}`);
    authSuccess(false);
    window.location = "http://localhost:3000/"
};
    