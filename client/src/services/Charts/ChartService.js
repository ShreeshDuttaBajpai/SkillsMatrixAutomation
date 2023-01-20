import { getApi } from '../baseApiService';

export const Chartapi = async () => {
  const TeamURL = `https://localhost:7040/api/User/Team`;
  const response = await getApi(TeamURL)
    .then(res => {
    //   if (res && res.data) return res.data;
    //   else return [];
     setTeam(() => res.data.map(val => val.team));
     setFirstCol(res.data[0].team);
     return setTeam() ,setFirstCol();
    })
    .catch(error => {
      return error;
    });
  console.log(response);
  return response;
//    axios.get(url).then(res => {
//      console.log(res.data);
//      setTeam(() => res.data.map(val => val.team));
//      setFirstCol(res.data[0].team);
//    });
};
