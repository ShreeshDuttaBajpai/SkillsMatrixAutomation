import { putApi } from 'rootpath/services/baseApiService';
import { delApi } from 'rootpath/services/baseApiService';
import { getApi } from '../baseApiService';

const baseurl = 'https://localhost:7040/api';

export const updateUser = async (url, data) => {
  const response = await putApi(baseurl + url, data).then(res => {
    console.log(res);
    return res.data;
  });
  return response;
};

export const deleteUser = async url => {
  const response = await delApi(baseurl + url);
  return response;
};
