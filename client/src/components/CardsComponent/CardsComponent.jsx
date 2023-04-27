import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import { getClientsTeamsList } from "./CardsComponentFunction";

const CardsComponent = ({ client }) => {
    const [teams, setTeams] = useState([]);
    useEffect(async () => {
        setTeams(await getClientsTeamsList(client.clientId));
    }, []);

    return (
        <div className={css.card_column}>
            <div className={css.card}>
                <div className={css.header}>
                    <h3 className={css.card_heading}>{client.clientName}</h3>
                    <span className={css.card_desc}>
                        <h5>({client.clientDescription})</h5>
                    </span>
                    <ButtonComponent
                        cname={css.add_button}
                        value={"Add Team"}
                    />
                </div>
                <hr />
                <p className={css.teamlist}>
                    {teams.length > 0 &&
                        teams.map((team, index) => {
                            return <TeamsComponent key={index} team={team} />;
                        })}
                </p>
            </div>
        </div>
    );
};

export default CardsComponent;
