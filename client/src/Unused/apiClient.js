import { getApi } from 'rootpath/services/baseApiService';

export const getApiCall = (actionType, apiURL, id) => {
  return async (dispatch, getState) => {
    // const apiBaseAddress = ''; //TODO: This will be saved into configuration file
    // const apiURL = `${apiBaseAddress}${apiName}`;
    const response = await getApi(apiURL, { id });
    dispatch({ actionType, payload: response });
  };
};
