// import { useState } from "react";
// export const validationInput = (state, title) => {
//     // const [formError, setformError] = useState({});
//     // let err = {};
//     // let array = [];
//     var result3 = `${title}name`;
//     console.log(state);
//     console.log(result3);

//     var regex = /^[ A-Za-z0-9_-]*$/;
//     if (state[`${title}name`] === "" && state[`${title}description`] === "") {
//         return { error: "No blank values allowed", field: "both" };
//     } else if (
//         !state[`${title}name`].match(regex) &&
//         !state[`${title}description`].match(regex)
//     ) {
//         return {
//             error: "Alphanumeric with - and _ are allowed",
//             field: "both"
//         };
//     } else if (state[`${title}name`] === "") {
//         // var validateName = formError.clientName;
//         // console.log(validateName);
//         // err.clientName = "Enter alphanumeric";
//         // err[`${title}name`] = "No blank values allowed";

//         // alert("No blank values allowed");
//         // return false;
//         return { error: "No blank values allowed", field: "name" };
//     } else if (state[`${title}function`] === "") {
//         // err;
//         // alert("No blank values allowed");
//         // return false;
//         return "no blank values allowed";
//     } else if (state[`${title}description`] === "") {
//         // alert("No blank values allowed");

//         // return false;
//         return { error: "No blank values allowed", field: "description" };
//     } else if (
//         state[`${title}name`].match(regex) &&
//         state[`${title}description`].match(regex)
//     ) {
//         if (`${title}` === "client") {
//             return "";
//         } else if (`${title}` === "team") {
//             return "";
//         } else if (`${title}` === "category") {
//             // postCategory(state);
//             return "";
//         } else if (`${title}` === "subcategory") {
//             return "";
//         }
//         // } else if (
//         //     !state[`${title}name`].match(regex) ||
//         //     !state[`${title}description`].match(regex) ||
//         //     !state[`${title}function`].match(regex)
//         // ) {
//         //     // alert("Alphanumeric with - and _ are allowed");
//         //     // return false;
//         //     return "Alphanumeric with - and _ are allowed";
//         // }
//     } else if (!state[`${title}name`].match(regex)) {
//         return {
//             error: "Alphanumeric with - and _ are allowed",
//             field: "name"
//         };
//     } else if (!state[`${title}description`].match(regex)) {
//         return {
//             error: "Alphanumeric with - and _ are allowed",
//             field: "description"
//         };
//     }
//     setformError({ ...err });
// };

//import { useState } from "react";

export const validationInput = (state, title) => {
    // const [formError, setformError] = useState({});
    // let err = {};
    let array = [];
    var result3 = `${title}name`;
    console.log(state);
    console.log(result3);
    var regex = /^[ A-Za-z0-9_-]*$/;
    if (state[`${title}name`] !== undefined && state[`${title}name`] === "") {
        array.push({ error: "Blank values are not allowed", field: "name" });
    }
    if (state[`${title}Name`] !== undefined && state[`${title}Name`] === "") {
        array.push({ error: "Blank values are not allowed", field: "Name" });
    }
    if (
        state[`${title}description`] !== undefined &&
        state[`${title}description`] === ""
    ) {
        array.push({
            error: "Blank values are not allowed",
            field: "description"
        });
    }

    if (state[`${title}Id`] !== undefined && state[`${title}Id`] === 0) {
        array.push({
            error: "Blank values is not allowed",
            field: "Id"
        });
    }

    if (
        state[`${title}function`] !== undefined &&
        state[`${title}function`] === ""
    ) {
        array.push({
            error: "Blank values are not allowed",
            field: "function"
        });
    }
    if (
        state[`${title}name`] !== undefined &&
        !state[`${title}name`].match(regex)
    ) {
        array.push({
            error: "Alphanumeric with - and _ are allowed",
            field: "name"
        });
    }

    if (
        state[`${title}function`] !== undefined &&
        !state[`${title}function`].match(regex)
    ) {
        array.push({
            error: "Alphanumeric with - and _ are allowed",
            field: "function"
        });
    }
    if (
        state[`${title}description`] !== undefined &&
        !state[`${title}description`].match(regex)
    ) {
        array.push({
            error: "Alphanumeric with - and _ are allowed",
            field: "description"
        });
    }
    return array;
};
// else if (
//     !state[`${title}name`].match(regex) &&
//     !state[`${title}description`].match(regex)
// ) {
//     return {
//         error: "Alphanumeric with - and _ are allowed",
//         field: "both"
//     };
// }
// else if (state[`${title}name`] === "") {
//     // var validateName = formError.clientName;
//     // console.log(validateName);
//     // err.clientName = "Enter alphanumeric";
//     // err[`${title}name`] = "No blank values allowed";

//     // alert("No blank values allowed");
//     // return false;
//     return { error: "No blank values allowed", field: "name" };
// }
// else if (state[`${title}function`] === "") {
//     // err;
//     // alert("No blank values allowed");
//     // return false;
//     return "no blank values allowed";
// }

// else if (state[`${title}description`] === "") {
//     // alert("No blank values allowed");

//     // return false;
//     return { error: "No blank values allowed", field: "description" };
// }
// else if (
//     state[`${title}name`].match(regex) &&
//     state[`${title}description`].match(regex)
// ) {
//     if (`${title}` === "client") {
//         return "";
//     } else if (`${title}` === "team") {
//         return "";
//     } else if (`${title}` === "category") {
//         // postCategory(state);
//         return "";
//     } else if (`${title}` === "subcategory") {
//         return "";
//     }
//     // } else if (
//     //     !state[`${title}name`].match(regex) ||
//     //     !state[`${title}description`].match(regex) ||
//     //     !state[`${title}function`].match(regex)
//     // ) {
//     //     // alert("Alphanumeric with - and _ are allowed");
//     //     // return false;
//     //     return "Alphanumeric with - and _ are allowed";
//     // }
// } else if (!state[`${title}name`].match(regex)) {
//     return {
//         error: "Alphanumeric with - and _ are allowed",
//         field: "name"
//     };
// } else if (!state[`${title}description`].match(regex)) {
//     return {
//         error: "Alphanumeric with - and _ are allowed",
//         field: "description"
//     };
// }
// setformError({ ...err });
//};
