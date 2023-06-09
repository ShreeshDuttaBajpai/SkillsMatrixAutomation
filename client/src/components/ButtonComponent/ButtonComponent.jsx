import React from "react";

export const ButtonComponent = props => {
    return (
        <>
            <button
                disabled={
                    props.selected != undefined
                        ? !props.selected
                        : props.disable
                }
                className={props.cname}
                type="submit"
                onClick={props.handleClick}
            >
                {props.value}
            </button>
        </>
    );
};
