import React, { useEffect } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./ClientsComponent.css";
import {
    getClientsTeamsList,
    handleEditPopupOpen
} from "./ClientsComponentFunctions";
import PopupContainer from "../PopupComponent/PopupContainer";
import { useState } from "react";

const ClientsComponent = ({ client }) => {
    const [editPopupOpen, setEditPopupOpen] = useState(false);
    const [teams, setTeams] = useState([]);
    // useEffect(async () => {
    //     setTeams(await getClientsTeamsList(client.id));
    // }, []);
    return (
        <div className={css.clientTeamsDetailsDiv}>
            {/* <div className={css.clientDetailsDiv}>
                <span className={css.clientSpan}>
                    {client.clientName} - {client.clientDescription}
                    <ButtonComponent
                        handleClick={() =>
                            handleEditPopupOpen(setEditPopupOpen)
                        }
                        cname={css.editClientBtn}
                        value={"Edit Client/Teams"}
                    />
                </span>
            </div>
            <div className={css.teamsDetailsDiv}>
                {teams.length > 0 &&
                    teams.map((team, index) => {
                        return <TeamsComponent key={index} team={team} />;
                    })}
            </div>
            {editPopupOpen && <PopupContainer client={client} />} */}
        </div>
    );
};

export default ClientsComponent;
