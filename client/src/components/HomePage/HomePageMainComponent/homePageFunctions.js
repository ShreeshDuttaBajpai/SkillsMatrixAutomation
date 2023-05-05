import { my_Data } from "../../../redux/common/actions";
import * as Msal from "msal";
import * as constants from "./homePageConstants";
import { fetchResponse } from "../../../services/HomePageServices/homePageServices";
import { useStore } from "react-redux";

export const continueWithMicrosoft = async dispatch => {
    var client = new Msal.UserAgentApplication(constants.config);
    var request = {
        scopes: ["user.read"]
    };

    // let loginResponse =
    await client.loginPopup(request);
    let tokenResponse = await client.acquireTokenSilent(request);
    let response = await fetchResponse(tokenResponse);
    let json = await response.json();
    console.log(JSON.stringify(json));
    alert("dfafb");
    dispatch(my_Data(json));
};
