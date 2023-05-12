import React, { useEffect, useState } from "react";
import css from "./SkillMatrix.css";
import { months } from "./SkillMatrixConstant";

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
            <table className={css.skilltable}>
                <thead>
                    <tr>
                        <th rowspan="2">Category</th>
                        <th colspan="3">Employees</th>
                    </tr>
                    <tr>
                        <th>emp1</th>
                        <th>emp2</th>
                        <th>emp3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3">Category 1</td>
                        <td>Subcategory 1.1</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.1 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 1.2</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.2 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.2 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.2 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 1.3</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.3 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2">Category 2</td>
                        <td>Subcategory 2.1</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 2.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 2.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 2.1 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 2.3</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 2.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 2.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 2.3 --> */}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SkillMatrix;
