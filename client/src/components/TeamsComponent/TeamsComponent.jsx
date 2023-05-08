import React from "react";
import css from "./TeamsComponent.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamsComponent = ({ team }) => {
    return (
        <div className={css.teamsDiv}>
            <FontAwesomeIcon icon={faUsers} />
            <span className={css.teamSpan}>
                {team.teamName} - {team.teamDescription}
            </span>
        </div>
    );
};

export default TeamsComponent;
