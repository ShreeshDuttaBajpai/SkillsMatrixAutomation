import React, { useEffect, useState } from "react";
import css from "./SkillMatrix.css";
import { months } from "./SkillMatrixConstant";
import SkillMatrixTable from "../SkillMatrixTable/SkillMatrixTable";

const SkillMatrix = ({ clients, fetchClientList, fetchTeamList, teams }) => {
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState([]);
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        selectedClient && fetchTeamList(selectedClient);
    }, [selectedClient, fetchTeamList]);

    const handlechange = e => {
        setSelectedClient(e.target.value);
    };
    const handlechangeteam = e => {
        setSelectedTeam(e.target.value);
    };
    return (
        <div className={css.team_container}>
            <select
                className={css.dropdown}
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
            <select
                className={css.dropdown}
                onChange={handlechangeteam}
                value={selectedTeam}
            >
                <option value="" disabled selected>
                    Select Team
                </option>
                {teams.length > 0 &&
                    teams.map(team => (
                        <option key={team.id} value={team.id}>
                            {console.log(team.teamName)}
                            {team.teamName}
                        </option>
                    ))}
            </select>
            <select className={css.dropdown}>
                <option value="" disabled selected>
                    Select Month
                </option>
                {months.map((month, index) => (
                    <option key={index} value={month}>
                        {month}
                    </option>
                ))}
            </select>
            <SkillMatrixTable
                selectedClient={selectedClient}
                selectedTeam={selectedTeam}
            />
        </div>
    );
};

export default SkillMatrix;
