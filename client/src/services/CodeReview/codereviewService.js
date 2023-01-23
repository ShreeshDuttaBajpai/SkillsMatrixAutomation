import { putApi } from 'rootpath/services/baseApiService';
import { delApi } from 'rootpath/services/baseApiService';
import { getApi } from '../baseApiService';

const baseurl="https://localhost:7040/api";

export const updateReview=async(url,data)=>{
  const response=await putApi(baseurl+url,data).then((res)=>{
    console.log(res);
    return res.data;
  });
  return response;
}

export const deleteReview=async(url)=>{
  const response=await delApi(baseurl+url)
  return response;
}