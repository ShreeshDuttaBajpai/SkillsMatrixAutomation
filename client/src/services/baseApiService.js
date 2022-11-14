import superagent from 'superagent';

export const getApi = async (apiURL, id) => {
  const requetURL = id ? `${apiURL}/${id}` : apiURL;
  const response = await superagent
    .get(requetURL)
    .set('Accept', 'application/json');
  return response;
};
