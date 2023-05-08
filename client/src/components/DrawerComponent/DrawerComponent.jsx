import React, { useState } from "react";
import css from "./DrawerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormAdd from "../FormAdd/FormAdd";
import TeamFormContainer from "../TeamForm/TeamFormContainer";

const DrawerComponent = (
    props
    // showDrawer,
    // setShowDrawer,
    // form2Visible,
    // form1Visible,
    // setForm1Visible,
    // setForm2Visible
) => {
    return (
        <div className={css.drawer_container}>
            <div className={css.drawerheading}>
                <span>
                    {" "}
                    <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                        onClick={() => {
                            props.setShowDrawer(!props.showDrawer);
                            props.setForm1Visible &&
                                props.setForm1Visible(!props.form1Visible);
                            props.setForm2Visible &&
                                props.setForm2Visible(!props.form2Visible);
                        }}
                    />
                </span>
                <hr />
                {props.form1Visible && props.parentid && <TeamFormContainer />}
                {props.form2Visible && <FormAdd />}
            </div>
        </div>
    );
};

export default DrawerComponent;
