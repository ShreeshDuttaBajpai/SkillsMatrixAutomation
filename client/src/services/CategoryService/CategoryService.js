import { getApi, postApi } from "../baseApiService";

export const CategoryListApi = async () => {
    const baseURL = "https://localhost:44325/categorymaster";
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

export const SubCategoryListApi = async categoryId => {
    const baseURL = `https://localhost:44325/SubCategoryAndCategoryMaster?CategoryId=${categoryId}`;
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

export const CategoryPostApi = async data => {
    const baseURL = "https://localhost:44325/postCategoryMaster";
    const response = await postApi(baseURL, data)
        .then(res => {
            alert("Category added successfully!!");
            return res;
        })
        .catch(error => {
            return error;
        });
    return response;
};

export const SubCatPostApi = async data => {
    const baseURL = "https://localhost:44325/postSubCategoryMaster";
    const response = await postApi(baseURL, data)
        .then(() => {
            alert("Sub Category added successfully!!");
        })
        .catch(error => {
            return error;
        });
    return response;
};
