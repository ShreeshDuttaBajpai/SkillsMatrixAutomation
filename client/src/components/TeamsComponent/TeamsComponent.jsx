import React from "react";
import css from "./TeamsComponent.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamsComponent = ({ team, sub }) => {
    return (
        <div className={css.teamsDiv}>
            <FontAwesomeIcon icon={faUsers} />
            <span className={css.teamSpan}>
                {team ? team.teamName : sub.subCategoryName} -{" "}
                {team ? team.teamDescription : sub.subCategoryDescription}
            </span>
        </div>
    );
};

export default TeamsComponent;
