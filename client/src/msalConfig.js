import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "64d7c5d5-cda1-42dc-b51c-78a96a774cba",
        authority: `https://login.microsoftonline.com/03849a8b-0fb2-4e35-94d7-5cc2c933b99f`,
        redirectUri: "http://localhost:3000/clients",
        scopes: ["User.Read"]
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
