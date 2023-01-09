import superagent from 'superagent';
import axios from 'axios';
import { useAuth } from '../components/auth.context';
import jwt_decode from 'jwt-decode';


const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

export const getApi = async (apiURL, id) => {
  const requetURL = id ? `${apiURL}/${id}` : apiURL;
  const response = await superagent
    .get(requetURL)
    .set('Accept', 'application/json');
  return response;
};

export const axiosGetAPI = async (baseURL) => {
  const response= await axios.get(baseURL);
  return response;
};


// export const api = axios.create(
//   {
//   baseURL: `https://localhost:7040/api/${
//     decoded.Emp_designation === 'Engineering Manager' ? 'Admin' : 'User'
//   }`
// });
