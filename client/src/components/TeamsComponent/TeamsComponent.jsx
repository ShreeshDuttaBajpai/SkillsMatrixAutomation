import React from "react";
import css from "./TeamsComponent.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
    getClientsTeamsList,
    getEmployeeList,
    getSubCategoryList
} from "../CardsComponent/CardsComponentFunction";
import cx from "classnames";
import { handleFieldChange } from "./TeamsFunctions";

const TeamsComponent = ({
    team,
    sub,
    employee,
    deleteEmployee,
    setEmployees,
    deleteTeam,
    setTeams,
    deleteSubCategory,
    setSubCategories,
    isCardEditable,
    editObj,
    setEditObj,
    editObjErrors,
    index
}) => {
    // console.log(editObjErrors);
    return (
        <div className={css.teamsDiv}>
            <div className={cx({ [css.cardItemRow]: isCardEditable })}>
                <FontAwesomeIcon
                    icon={faUsers}
                    className={cx({ [css.rowIcon]: isCardEditable })}
                />
                {!isCardEditable ? (
                    <span className={css.teamSpan}>
                        {team && team.teamName} {sub && sub.subCategoryName}
                        {employee && employee.employeeId} -{" "}
                        {team && team.teamDescription}
                        {sub && sub.subCategoryDescription}
                        {employee && employee.employeeName}
                    </span>
                ) : (
                    <>
                        <div className={css.inputErrorsContainer}>
                            <input
                                type={employee ? "number" : "text"}
                                value={
                                    team
                                        ? editObj.teams[
                                              editObj.teams.findIndex(
                                                  teamItem =>
                                                      teamItem.id === team.id
                                              )
                                          ].teamName
                                        : sub
                                        ? editObj.subCategories[
                                              editObj.subCategories.findIndex(
                                                  subCategory =>
                                                      subCategory.id === sub.id
                                              )
                                          ].subCategoryName
                                        : employee &&
                                          editObj.employees[
                                              editObj.employees.findIndex(
                                                  emp =>
                                                      emp.employeeId ===
                                                      employee.employeeId
                                              )
                                          ].employeeId
                                }
                                className={css.editableInputFields}
                                onChange={e =>
                                    handleFieldChange(
                                        e,
                                        team
                                            ? team.id
                                            : sub
                                            ? sub.id
                                            : employee && employee.employeeId,
                                        editObj,
                                        setEditObj,
                                        team
                                            ? "teams"
                                            : sub
                                            ? "subCategories"
                                            : employee && "employees",
                                        team
                                            ? "teamName"
                                            : sub
                                            ? "subCategoryName"
                                            : employee && "employeeId"
                                    )
                                }
                                disabled={!!employee}
                            />
                            {team &&
                                editObjErrors &&
                                editObjErrors.teamErrors &&
                                editObjErrors.teamErrors[index][
                                    editObjErrors.teamErrors[index].findIndex(
                                        err => err.field === "Name"
                                    )
                                ] && (
                                    <span className={css.errorMsgSpan}>
                                        {
                                            editObjErrors.teamErrors[index][
                                                editObjErrors.teamErrors[
                                                    index
                                                ].findIndex(
                                                    err => err.field === "Name"
                                                )
                                            ].error
                                        }
                                    </span>
                                )}
                            {sub &&
                                editObjErrors &&
                                editObjErrors.subCategoryErrors &&
                                editObjErrors.subCategoryErrors[index][
                                    editObjErrors.subCategoryErrors[
                                        index
                                    ].findIndex(err => err.field === "Name")
                                ] && (
                                    <span className={css.errorMsgSpan}>
                                        {
                                            editObjErrors.subCategoryErrors[
                                                index
                                            ][
                                                editObjErrors.subCategoryErrors[
                                                    index
                                                ].findIndex(
                                                    err => err.field === "Name"
                                                )
                                            ].error
                                        }
                                    </span>
                                )}
                        </div>
                        <div className={css.inputErrorsContainer}>
                            <input
                                type={"text"}
                                value={
                                    team
                                        ? editObj.teams[
                                              editObj.teams.findIndex(
                                                  teamItem =>
                                                      teamItem.id === team.id
                                              )
                                          ].teamDescription
                                        : sub
                                        ? editObj.subCategories[
                                              editObj.subCategories.findIndex(
                                                  subCategory =>
                                                      subCategory.id === sub.id
                                              )
                                          ].subCategoryDescription
                                        : employee &&
                                          editObj.employees[
                                              editObj.employees.findIndex(
                                                  emp =>
                                                      emp.employeeId ===
                                                      employee.employeeId
                                              )
                                          ].employeeName
                                }
                                className={css.editableInputFields}
                                onChange={e =>
                                    handleFieldChange(
                                        e,
                                        team
                                            ? team.id
                                            : sub
                                            ? sub.id
                                            : employee && employee.employeeId,
                                        editObj,
                                        setEditObj,
                                        team
                                            ? "teams"
                                            : sub
                                            ? "subCategories"
                                            : employee && "employees",
                                        team
                                            ? "teamDescription"
                                            : sub
                                            ? "subCategoryDescription"
                                            : employee && "employeeName"
                                    )
                                }
                            />
                            {team &&
                                editObjErrors &&
                                editObjErrors.teamErrors &&
                                editObjErrors.teamErrors[index][
                                    editObjErrors.teamErrors[index].findIndex(
                                        err => err.field === "Description"
                                    )
                                ] && (
                                    <span className={css.errorMsgSpan}>
                                        {
                                            editObjErrors.teamErrors[index][
                                                editObjErrors.teamErrors[
                                                    index
                                                ].findIndex(
                                                    err =>
                                                        err.field ===
                                                        "Description"
                                                )
                                            ].error
                                        }
                                    </span>
                                )}
                            {sub &&
                                editObjErrors &&
                                editObjErrors.subCategoryErrors &&
                                editObjErrors.subCategoryErrors[index][
                                    editObjErrors.subCategoryErrors[
                                        index
                                    ].findIndex(
                                        err => err.field === "Description"
                                    )
                                ] && (
                                    <span className={css.errorMsgSpan}>
                                        {
                                            editObjErrors.subCategoryErrors[
                                                index
                                            ][
                                                editObjErrors.subCategoryErrors[
                                                    index
                                                ].findIndex(
                                                    err =>
                                                        err.field ===
                                                        "Description"
                                                )
                                            ].error
                                        }
                                    </span>
                                )}
                            {employee &&
                                editObjErrors &&
                                editObjErrors.employeeErrors &&
                                editObjErrors.employeeErrors[index][
                                    editObjErrors.employeeErrors[
                                        index
                                    ].findIndex(err => err.field === "Name")
                                ] && (
                                    <span className={css.errorMsgSpan}>
                                        {
                                            editObjErrors.employeeErrors[index][
                                                editObjErrors.employeeErrors[
                                                    index
                                                ].findIndex(
                                                    err => err.field === "Name"
                                                )
                                            ].error
                                        }
                                    </span>
                                )}
                        </div>
                    </>
                )}
            </div>

            <FontAwesomeIcon
                className={cx(css.deleteItemIcon, {
                    [css.rowIcon]: isCardEditable
                })}
                icon={faTrash}
                onClick={async () => {
                    if (confirm("Are you sure you want to delete this item?")) {
                        employee && (await deleteEmployee(employee.employeeId));
                        team &&
                            deleteTeam(team.id).then(async () => {
                                setTeams(
                                    await getClientsTeamsList(team.clientId)
                                );
                            });
                        sub &&
                            deleteSubCategory(sub.id).then(async () => {
                                setSubCategories(
                                    await getSubCategoryList(sub.categoryId)
                                );
                            });
                    }
                }}
            />
        </div>
    );
};

export default TeamsComponent;
