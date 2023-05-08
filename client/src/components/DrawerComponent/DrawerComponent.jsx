import React, { useState } from "react";
import css from "./DrawerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormAdd from "../FormAdd/FormAdd";
import TeamFormContainer from "../TeamForm/TeamFormContainer";
import CategoryForm from "../CategoryForm/CategoryForm";
import SubCategoryFormContainer from "../SubCategoryForm/SubCategoryFormContainer";

const DrawerComponent = props => {
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
                            props.setForm3Visible &&
                                props.setForm3Visible(!props.form3Visible);
                            props.setForm4Visible &&
                                props.setForm4Visible(!props.form4Visible);
                        }}
                    />
                </span>
                <hr />
                {props.form1Visible && props.parentid && <TeamFormContainer />}
                {props.form2Visible && <FormAdd />}
                {props.form3Visible && <CategoryForm />}
                {props.form4Visible && props.parentid && (
                    <SubCategoryFormContainer />
                )}
            </div>
        </div>
    );
};

export default DrawerComponent;
