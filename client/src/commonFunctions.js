import { callMsGraph } from "./graph";
import { msalConfig } from "./msalConfig";

export const handleLogin = async instance => {
    try {
        await instance.loginRedirect();
    } catch (err) {
        console.error(err);
    }
};

export const acquireToken = (instance, accounts, setGraphData) => {
    instance
        .acquireTokenSilent({
            ...msalConfig.auth.scopes,
            account: accounts[0]
        })
        .then(response => {
            callMsGraph(response.accessToken).then(response =>
                setGraphData(response)
            );
        });
};
