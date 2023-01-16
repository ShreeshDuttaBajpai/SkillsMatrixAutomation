import superagent from 'superagent';
import axios from 'axios';

const baseurl="https://localhost:7040/api";

export const getApi = async (apiURL, id) => {
  const requetURL = id ? `${apiURL}/${id}` : apiURL;
  const response = await superagent
    .get(requetURL)
    .set('Accept', 'application/json');
  return response;
};
export const putApi = async (apiURL,data) => {
  const response = await axios.put(baseurl+apiURL,data);
  return response;
};
export const delApi = async (apiURL) => {
  const response = await axios.delete(baseurl+apiURL);
  return response;
};
