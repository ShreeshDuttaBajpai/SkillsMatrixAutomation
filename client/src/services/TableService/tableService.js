import { useAuth } from '../../components/auth.context';
import jwt_decode from 'jwt-decode';
import { axiosGetAPI } from '../baseApiService';

const { userToken } = useAuth();
const decoded = jwt_decode(userToken);

// export const CodeReviewapi = axios.create({
//     baseURL: `https://localhost:7040/api/Review/${decoded.Emp_firstname}`
// });

export const CodeReviewapi = async () => {
    const baseURL = 'https://localhost:7040/api/Review/${decoded.Emp_firstname}';
    const response = await axiosGetAPI(baseURL);
    return response;
  };