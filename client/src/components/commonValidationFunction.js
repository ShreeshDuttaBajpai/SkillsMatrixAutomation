import { useState } from "react";
export const validationInput = (state, title) => {
    // const [formError, setformError] = useState({});
    // let err = {};
    var result3 = `${title}name`;
    console.log(state);
    console.log(result3);

    var regex = /^[ A-Za-z0-9_-]*$/;
    if (state[`${title}name`] === "") {
        // var validateName = formError.clientName;
        // console.log(validateName);
        // err.clientName = "Enter alphanumeric";
        // err[`${title}name`] = "No blank values allowed";

        alert("No blank values allowed");
        return false;
    } else if (state[`${title}function`] === "") {
        // err;
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
            return true;
        } else if (`${title}` === "team") {
            return true;
        } else if (`${title}` === "category") {
            // postCategory(state);
            return true;
        } else if (`${title}` === "subcategory") {
            return true;
        }
    } else if (
        !state[`${title}name`].match(regex) ||
        !state[`${title}description`].match(regex) ||
        !state[`${title}function`].match(regex)
    ) {
        alert("Alphanumeric with - and _ are allowed");
        return false;
    }
    setformError({ ...err });
};
