import { getApi } from '../baseApiService';

export const CodeReviewapi = async(decoded) => {
    const baseURL=`https://localhost:7040/api/Review/${decoded.Emp_firstname}`;
    const response = await getApi(baseURL).then(res => {
    if(res && res.data)
      return res.data;
      else
      return [];
    }).catch(error => {
          return error;
        });
    console.log(response);
    return response;
  };