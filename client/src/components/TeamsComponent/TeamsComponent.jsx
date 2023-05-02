import React from "react";
import css from "./TeamsComponent.css";

const TeamsComponent = ({ team }) => {
    return (
        <div className={css.teamsDiv}>
            <span className={css.teamSpan}>
                {team.teamName} - {team.teamDescription}
            </span>
        </div>
    );
};

export default TeamsComponent;
