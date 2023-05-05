import { getApi, postApi } from "../baseApiService";

export const ClientListApi = async () => {
    const baseURL = "https://localhost:44325/clientmaster";
    const response = await getApi(baseURL)
        .then(res => {
            if (res && res.data) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    console.log(response);
    return response;
};

export const ClientTeamsApi = async clientId => {
    const baseURL = `https://localhost:44325/teamclients?ClientId=${clientId}`;
    const response = await getApi(baseURL)
        .then(res => {
            if (res && res.data) return res.data;
            else return [];
        })
        .catch(error => {
            return error;
        });
    console.log(response);
    return response;
};

export const ClientPostApi = async(data) => {
    const baseURL = "https://localhost:44325/postClientMaster";
    const response=await postApi(baseURL,data).then(res => {
        alert('Client added successfully!!')})
        .catch(error => {
            return error;
        });
    console.log(response);
    return response;
}

export const TeamPostApi = async(data) => {
    const baseURL = "https://localhost:44325/postTeamMaster";
    const response=await postApi(baseURL,data).then(res => {
        alert('Team added successfully!!')})
        .catch(error => {
            return error;
        });
    console.log(response);
    return response;
}
