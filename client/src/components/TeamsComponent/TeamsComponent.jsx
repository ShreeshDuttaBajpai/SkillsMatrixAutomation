import React from "react";
import css from "./TeamsComponent.css";
import "font-awesome/css/font-awesome.min.css";

const TeamsComponent = ({ team }) => {
    return (
        <div className={css.teamsDiv}>
            <span className={css.teamSpan}>
                <i className="fa fa-users" aria-hidden="true"></i>
                {team.teamName} - {team.teamDescription}
            </span>
        </div>
    );
};

export default TeamsComponent;
