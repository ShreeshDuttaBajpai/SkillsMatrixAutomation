import {
    CategoryListApi,
    ClientListApi,
    ClientTeamsApi
} from "../../services/MasterService/MasterService";
import { PostScoreMappings } from "../../services/ScoreService/ScoreService";

export const handleEditPopupOpen = setEditPopupOpen => {
    setEditPopupOpen(prev => !prev);
};

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

export const getCategoriesList = async () => {
    const result = await CategoryListApi();
    console.log(result);
    return result;
};

export const handleScoreSave = async (selectedTeam, expectedScoreMappings) => {
    const teamScores = { teamId: selectedTeam, scores: expectedScoreMappings };
    console.log(teamScores);
    await PostScoreMappings(teamScores);
};
