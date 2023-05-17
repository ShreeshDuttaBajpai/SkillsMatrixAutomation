export const validationInput = (state, title) => {
    let errorArray = [];
    console.log(state[`${title}Name`]);
    const blankError = "Blank values are not allowed";
    const specialCharError =
        "Alphanumeric with only '&', '.', '-' and '_' are allowed";
    var regex = /^[ &.A-Za-z0-9_-]*$/;
    if (
        state[`${title}name`] !== undefined &&
        state[`${title}name`].trim() === ""
    ) {
        errorArray.push({
            error: blankError,
            field: "name"
        });
    }
    if (
        state[`${title}Name`] !== undefined &&
        state[`${title}Name`].trim() === ""
    ) {
        errorArray.push({
            error: blankError,
            field: "Name"
        });
    }
    if (
        state[`${title}description`] !== undefined &&
        state[`${title}description`].trim() === ""
    ) {
        errorArray.push({
            error: blankError,
            field: "description"
        });
    }
    if (
        state[`${title}Description`] !== undefined &&
        state[`${title}Description`].trim() === ""
    ) {
        errorArray.push({
            error: blankError,
            field: "Description"
        });
    }

    if (state[`${title}Id`] !== undefined && state[`${title}Id`] === 0) {
        errorArray.push({
            error: blankError,
            field: "Id"
        });
    }

    if (
        state[`${title}function`] !== undefined &&
        state[`${title}function`].trim() === ""
    ) {
        errorArray.push({
            error: blankError,
            field: "function"
        });
    }
    if (
        state[`${title}name`] !== undefined &&
        !state[`${title}name`].match(regex)
    ) {
        errorArray.push({
            error: specialCharError,
            field: "name"
        });
    }
    if (
        state[`${title}Name`] !== undefined &&
        !state[`${title}Name`].match(regex)
    ) {
        errorArray.push({
            error: specialCharError,
            field: "Name"
        });
    }

    if (
        state[`${title}function`] !== undefined &&
        !state[`${title}function`].match(regex)
    ) {
        errorArray.push({
            error: specialCharError,
            field: "function"
        });
    }
    if (
        state[`${title}description`] !== undefined &&
        !state[`${title}description`].match(regex)
    ) {
        errorArray.push({
            error: specialCharError,
            field: "description"
        });
    }
    if (
        state[`${title}Description`] !== undefined &&
        !state[`${title}Description`].match(regex)
    ) {
        errorArray.push({
            error: specialCharError,
            field: "Description"
        });
    }
    return errorArray;
};

export const validateEditObj = (state, title, subTitle) => {
    const errorObj =
        title === "client"
            ? {
                  id: state.id,
                  [`${title}Error`]: validationInput(state, title),
                  [`${subTitle}Errors`]: state[`${subTitle}s`].map(sub =>
                      validationInput(sub, subTitle)
                  )
              }
            : title === "category"
            ? {
                  id: state.id,
                  [`${title}Error`]: validationInput(state, title),
                  [`${subTitle}Errors`]: state.subCategories.map(sub =>
                      validationInput(sub, subTitle)
                  )
              }
            : title === "team" && {
                  id: state.id,
                  [`${title}Error`]: validationInput(state, title),
                  [`${subTitle}Errors`]: state[`${subTitle}s`].map(sub =>
                      validationInput(sub, subTitle)
                  )
              };
    return errorObj;
};
