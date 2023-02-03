import { getApi } from '../baseApiService';

export const Chartteamapi = async () => {
  const TeamURL = `https://localhost:7040/api/User/Team`;
  const response = await getApi(TeamURL)
  return response;
}

export const Chartnameapi = async () => {
  const TeamURL = `https://localhost:7040/api/User/Name`;
  const response = await getApi(TeamURL)
  return response;
}

export const Chartapi = async (url) => {
  const TeamURL = `https://localhost:7040/api/Charts`;
  const response = await getApi(TeamURL+url).then(res => {return res.data})
  return response;
}
