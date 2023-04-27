import { ClientListApi, ClientTeamsApi } from "../../services/ClientService/ClientService";

export const getClientsList = async () => {
    const result = await ClientListApi();
    console.log(result);
    return result;
};

export const getClientsTeamsList = async clientId => {
    console.log(clientId);
    const result = await ClientTeamsApi(clientId);
    console.log(result);
    return result;
};