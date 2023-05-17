import { delApi, getApi, postApi, putApi } from "../baseApiService";

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
    return response;
};

export const ClientPostApi = async data => {
    const baseURL = "https://localhost:44325/postClientMaster";
    const response = await postApi(baseURL, data)
        .then(res => {
            alert("Client added successfully!!");
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const TeamPostApi = async data => {
    const baseURL = "https://localhost:44325/postTeamMaster";
    const response = await postApi(baseURL, data)
        .then(res => {
            alert("Team added successfully!!");
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const DeleteEmployeeApi = async employeeId => {
    const baseURL = `https://localhost:44325/EmployeeDelete?employeeId=${employeeId}`;
    await delApi(baseURL)
        .then(() => {
            alert("Employee deleted successfully");
        })
        .catch(error => {
            console.log(error);
        });
};

export const DeleteTeamApi = async teamId => {
    const baseURL = `https://localhost:44325/teammaster?teamId=${teamId}`;
    await delApi(baseURL)
        .then(() => {
            alert("Team deleted successfully");
        })
        .catch(error => {
            console.log(error);
        });
};

export const DeleteSubCategoryApi = async subCategoryId => {
    const baseURL = `https://localhost:44325/subcategorymaster?subCategoryId=${subCategoryId}`;
    await delApi(baseURL)
        .then(() => {
            alert("Sub-Category deleted successfully");
        })
        .catch(error => {
            console.log(error);
        });
};

export const EditClientTeamApi = async editObj => {
    const baseURL = "https://localhost:44325/client-teams";
    await putApi(baseURL, editObj)
        .then(() => {
            alert("Client and teams updated successfully");
        })
        .catch(error => {
            alert("Error ocurred. Check console.");
            console.log(error);
        });
};

export const EditCategorySubcategoriesApi = async editObj => {
    const baseURL = "https://localhost:44325/category-subcategory";
    await putApi(baseURL, editObj)
        .then(() => {
            alert("Category and sub-categories updated successfully");
        })
        .catch(error => {
            alert("Error ocurred. Check console.");
            console.log(error);
        });
};

export const EditTeamEmployeesApi = async editObj => {
    const baseURL = "https://localhost:44325/team-employees";
    await putApi(baseURL, editObj)
        .then(() => {
            alert("Team and employees updated successfully");
        })
        .catch(error => {
            alert("Error ocurred. Check console.");
            console.log(error);
        });
};
