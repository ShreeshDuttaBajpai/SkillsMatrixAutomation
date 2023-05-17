import React, { useState } from "react";
import css from "./DrawerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormAdd from "../FormAdd/FormAdd";
import TeamFormContainer from "../TeamForm/TeamFormContainer";
import CategoryForm from "../CategoryForm/CategoryForm";
import SubCategoryFormContainer from "../SubCategoryForm/SubCategoryFormContainer";
import CategoryFormContainer from "../CategoryForm/CategoryFormContainer";
import EmpFormContainer from "../EmpForm/EmpFormContainer";
import FormAddContainer from "../FormAdd/FormAddContainer";

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
                            props.setaddTeamFormVisible &&
                                props.setaddTeamFormVisible(
                                    !props.addTeamFormVisible
                                );
                            props.setclientFormVisible &&
                                props.setclientFormVisible(
                                    !props.clientFormVisible
                                );
                            props.setcategoryFormVisible &&
                                props.setcategoryFormVisible(
                                    !props.categoryFormVisible
                                );
                            props.setaddSubCategoryFormVisible &&
                                props.setaddSubCategoryFormVisible(
                                    !props.addSubCategoryFormVisible
                                );
                            props.setaddEmployeeFormVisible &&
                                props.setaddEmployeeFormVisible(
                                    !props.addEmployeeFormVisible
                                );
                        }}
                    />
                </span>
                <hr />
                {props.clientFormVisible && (
                    <FormAddContainer
                        clientFormVisible={props.clientFormVisible}
                        setclientFormVisible={props.setclientFormVisible}
                        showDrawer={props.showDrawer}
                        setShowDrawer={props.setShowDrawer}
                    />
                )}
                {props.addTeamFormVisible && props.parentid && (
                    <TeamFormContainer
                        addTeamFormVisible={props.addTeamFormVisible}
                        setaddTeamFormVisible={props.setaddTeamFormVisible}
                        showDrawer={props.showDrawer}
                        setShowDrawer={props.setShowDrawer}
                        setTeams={props.setTeams}
                    />
                )}
                {props.categoryFormVisible && (
                    <CategoryFormContainer
                        categoryFormVisible={props.categoryFormVisible}
                        setcategoryFormVisible={props.setcategoryFormVisible}
                        showDrawer={props.showDrawer}
                        setShowDrawer={props.setShowDrawer}
                    />
                )}
                {props.addSubCategoryFormVisible && props.parentid && (
                    <SubCategoryFormContainer
                        addSubCategoryFormVisible={
                            props.addSubCategoryFormVisible
                        }
                        setaddSubCategoryFormVisible={
                            props.setaddSubCategoryFormVisible
                        }
                        showDrawer={props.showDrawer}
                        setShowDrawer={props.setShowDrawer}
                        setSubCategory={props.setSubCategory}
                    />
                )}
                {props.addEmployeeFormVisible && props.parentid && (
                    <EmpFormContainer
                        addEmployeeFormVisible={props.addEmployeeFormVisible}
                        setaddEmployeeFormVisible={
                            props.setaddEmployeeFormVisible
                        }
                        showDrawer={props.showDrawer}
                        setShowDrawer={props.setShowDrawer}
                        setEmployees={props.setEmployees}
                    />
                )}
            </div>
        </div>
    );
};

export default DrawerComponent;
