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
    isCardEditable
}) => {
    console.log(isCardEditable);
    console.log(team);
    return (
        <div className={css.teamsDiv}>
            <div className={cx({ [css.cardItemRow]: isCardEditable })}>
                <FontAwesomeIcon icon={faUsers} />
                {!isCardEditable ? (
                    <span className={css.teamSpan}>
                        {team && team.teamName} {sub && sub.subCategoryName}{" "}
                        {employee && employee.employeeId} -{" "}
                        {team && team.teamDescription}{" "}
                        {sub && sub.subCategoryDescription}
                        {employee && employee.employeeName}
                    </span>
                ) : (
                    <>
                        <input
                            value={
                                team
                                    ? team.teamName
                                    : sub
                                    ? sub.subCategoryName
                                    : employee && employee.employeeId
                            }
                            className={css.editableInputFields}
                        />
                        <input
                            value={
                                team
                                    ? team.teamDescription
                                    : sub
                                    ? sub.subCategoryDescription
                                    : employee && employee.employeeName
                            }
                            className={css.editableInputFields}
                        />
                    </>
                )}
            </div>

            <FontAwesomeIcon
                className={css.deleteItemIcon}
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
