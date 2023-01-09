import { getApi } from 'rootpath/services/baseApiService';
import jwt_decode from 'jwt-decode';
import { useAuth } from '../auth.context';

const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

export const fetchReview = async () => {
  const apiURL = `https://localhost:7040/api/Review/${decoded.Emp_firstname}`;
  //all api result manupulation has to be done here and then only
  //return that portion of data needs to be updated in UI
  const response = await getApi(apiURL);
  return response;
};