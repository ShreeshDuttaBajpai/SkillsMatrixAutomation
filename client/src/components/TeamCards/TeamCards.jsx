import React, { useEffect, useState } from "react";
import css from "./TeamCards.css";
import CardsContainer from "../CardsComponent/CardsContainer";

const TeamCards = ({ clients, fetchClientList, fetchTeamList, teams }) => {
    const [selectedClient, setSelectedClient] = useState([]);

    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        selectedClient && fetchTeamList(selectedClient);
    }, [selectedClient, fetchTeamList]);

    const handlechange = e => {
        setSelectedClient(e.target.value);
    };

    return (
        <div className={css.team_container}>
            <select
                className={css.clientdropdown}
                value={selectedClient}
                onChange={handlechange}
            >
                <option value="" disabled>
                    Select Client
                </option>
                {clients.length > 1 &&
                    clients.map(emp => (
                        <option key={emp.id} value={emp.id}>
                            {emp.clientName}
                        </option>
                    ))}
            </select>
            <div className={css.teamcard_container}>
                <div className={css.card_row}>
                    {teams.length > 0 &&
                        teams.map((team, index) => {
                            return <CardsContainer key={index} team={team} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default TeamCards;
