import { postApi } from "../baseApiService";

export const PostScoreMappings = async scoreMappings => {
    const baseURL = "https://localhost:44325/PostSubCategoryMapping";
    await postApi(baseURL, scoreMappings)
        .then(() => {
            console.log("Data inserted successfully");
        })
        .catch(error => {
            console.log(error);
        });
};
