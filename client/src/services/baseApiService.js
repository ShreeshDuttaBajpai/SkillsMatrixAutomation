import superagent from 'superagent';
import axios from 'axios';
// import { useAuth } from '../components/auth.context';
// import jwt_decode from 'jwt-decode';


// export const getApi = async (apiURL, id) => {
//   const requetURL = id ? `${apiURL}/${id}` : apiURL;
//   const response = await superagent
//     .get(requetURL)
//     .set('Accept', 'application/json');
//   return response;
// };

export const getApi = async (baseURL) => {
  const response = await axios.get(baseURL);
  console.log(response);
  return response;
};

export const putApi = async (baseURL) => {
  const response= await axios.put(baseURL);
  console.log(response);
  return response;
};

export const postApi = async (baseURL) => {
  const response= await axios.post(baseURL);
  console.log(response);
  return response;
};

export const deleteApi = async (baseURL) => {
  const response= await axios.delete(baseURL);
  console.log(response);
  return response;
};