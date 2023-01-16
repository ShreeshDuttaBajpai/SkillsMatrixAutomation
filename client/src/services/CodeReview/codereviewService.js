import { putApi } from 'rootpath/services/baseApiService';
import { delApi } from 'rootpath/services/baseApiService';

export const updateReview=async(url,data)=>{
  const response=await putApi(url,data).then((res)=>{
    console.log(res);
    return res.data;
  });
  return response;
}

export const deleteReview=async(url)=>{
  const response=await delApi(url)
  return response;
}