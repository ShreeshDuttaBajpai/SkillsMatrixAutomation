import React from "react";
import css from "./TeamsComponent.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamsComponent = ({ team, sub, employee }) => {
    console.log(employee);
    return (
        <div className={css.teamsDiv}>
            <div>
                <FontAwesomeIcon icon={faUsers} />
                <span className={css.teamSpan}>
                    {team && team.teamName} {sub && sub.subCategoryName}{" "}
                    {employee && employee.employeeId} -{" "}
                    {team && team.teamDescription}{" "}
                    {sub && sub.subCategoryDescription}
                    {employee && employee.employeeName}
                </span>
            </div>

            <FontAwesomeIcon icon={faDeleteLeft} />
        </div>
    );
};

export default TeamsComponent;
