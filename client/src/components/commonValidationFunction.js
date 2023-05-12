import { ClientPostApi } from "../services/ClientService/ClientService";
import { CategoryPostApi } from "../services/CategoryService/CategoryService";

export const postClient = async state => {
    await ClientPostApi(state);
};

const postCategory = async state => {
    await CategoryPostApi(state);
};

export const validationInput = (state, title) => {
    // const [formError, setformError] = useState({});
    let err = {};
    var result3 = `${title}name`;
    console.log(state);
    console.log(result3);
    // setformError(...err);
    var regex = /^[ A-Za-z0-9_-]*$/;
    if (state[`${title}name`] === "") {
        // var validateName = formError.clientName;
        // console.log(validateName);
        // err.clientName = "Enter alphanumeric";
        alert("No blank values allowed");
        return false;
    } else if (state[`${title}description`] === "") {
        alert("No blank values allowed");
        return false;
    } else if (
        state[`${title}name`].match(regex) &&
        state[`${title}description`].match(regex)
    ) {
        if (`${title}` === "client") {
            postClient(state);
            return true;
        } else if (`${title}` === "team") {
            return true;
        } else if (`${title}` === "category") {
            postCategory(state);
            return true;
        } else if (`${title}` === "subcategory") {
            return true;
        }
    } else if (
        !state[`${title}name`].match(regex) ||
        !state[`${title}description`].match(regex)
    ) {
        alert("Alphanumeric with - and _ are allowed");
        return false;
    }
};
