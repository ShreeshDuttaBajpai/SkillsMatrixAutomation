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

    console.log(selectedClient);
    console.log(teams);

    return (
        <div className={css.teamcard_container}>
            <select
                className={css.clientdropdown}
                value={selectedClient}
                onChange={handlechange}
            >
                <option value="" disabled selected>
                    Select Client
                </option>
                {clients.length > 1 &&
                    clients.map(emp => (
                        <option key={emp.id} value={emp.id}>
                            {console.log(emp)}
                            {emp.clientName}
                        </option>
                    ))}
            </select>
            <div className={css.card_row}>
                {teams.length &&
                    teams.map((team, index) => {
                        return <CardsContainer key={index} team={team} />;
                    })}
            </div>
        </div>
    );
};

export default TeamCards;
