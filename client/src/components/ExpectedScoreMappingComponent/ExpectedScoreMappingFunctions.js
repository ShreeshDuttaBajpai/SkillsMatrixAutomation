import {
    CategoryListApi,
    ClientListApi,
    ClientTeamsApi
} from "../../services/MasterService/MasterService";
import {
    PostScoreMappings,
    TeamExpectedScoresListApi
} from "../../services/ScoreService/ScoreService";

export const handleEditPopupOpen = setEditPopupOpen => {
    setEditPopupOpen(prev => !prev);
};

export const getClientsList = async () => {
    const result = await ClientListApi();
    return result;
};

export const getClientsTeamsList = async clientId => {
    const result = await ClientTeamsApi(clientId);
    return result;
};

export const getCategoriesList = async () => {
    const result = await CategoryListApi();
    return result;
};

export const handleScoreSave = async (selectedTeam, expectedScoreMappings) => {
    const teamScores = { teamId: selectedTeam, scores: expectedScoreMappings };
    await PostScoreMappings(teamScores);
};
export const getTeamExpectedScores = async teamId => {
    const result = await TeamExpectedScoresListApi(teamId);
    return result;
};
