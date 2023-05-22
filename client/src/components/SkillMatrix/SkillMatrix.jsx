import React, { useEffect, useState } from "react";
import css from "./SkillMatrix.css";
import cx from "classnames";
import { months } from "./SkillMatrixConstant";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import SubCategoryExpectedScoreContainer from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreContainer";
import SkillMatrixContainer from "../SkillMatrixComponent/SkillMatrixContainer";
import { handleScoreSave } from "../EmployeeScoreComponent/EmployeeScoreFunctions";

const SkillMatrix = ({
    clients,
    teams,
    categories,
    expectedScoreMappings,
    fetchCategoriesList,
    fetchClientList,
    fetchClientTeamsList,
    fetchExpectedScore,
    fetchEmplist,
    employee,
    fetchEmployeeScores,
    employeeScores
}) => {
    const [selectedClient, setSelectedClient] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [employeeScoreArr, setEmployeeScoreArr] = useState(employeeScores);
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        selectedClient && fetchClientTeamsList(selectedClient);
    }, [selectedClient, fetchClientTeamsList]);

    useEffect(() => {
        fetchCategoriesList();
    }, [fetchCategoriesList]);

    useEffect(() => {
        selectedTeam && fetchExpectedScore(selectedTeam);
    }, [selectedTeam]);

    useEffect(() => {
        selectedTeam && fetchEmplist(selectedTeam);
    }, [selectedTeam]);

    useEffect(() => {
        selectedTeam && fetchEmployeeScores(selectedTeam);
    }, [selectedTeam]);

    const handlechange = e => {
        setSelectedClient(e.target.value);
    };
    const handlechangeteam = e => {
        setSelectedTeam(e.target.value);
    };
    const handlechangemonth = e => {
        setSelectedMonth(e.target.value);
    };
    return (
        <div className={css.team_container}>
            <div className={css.dependentContainer}>
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
                                {team.teamName}
                            </option>
                        ))}
                </select>
                <select
                    className={css.dropdown}
                    onChange={handlechangemonth}
                    value={selectedMonth}
                >
                    <option value="" disabled selected>
                        Select Month
                    </option>
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>
            {selectedTeam && (
                <div>
                    <SkillMatrixContainer
                        employee={employee}
                        selectedTeam={selectedTeam}
                        employeeScoreArr={employeeScoreArr}
                        setEmployeeScoreArr={setEmployeeScoreArr}
                    />
                    {/* </div> */}
                    <div className={css.mappingsBtnContainer}>
                        <button
                            className={cx(
                                css.mappingsBtn,
                                css.secondMappingsBtn,
                                {
                                    [css.mappingsBtnDisabled]:
                                        !selectedClient || !selectedTeam
                                }
                            )}
                            onClick={() => fetchEmployeeScores(selectedTeam)}
                            disabled={!selectedClient || !selectedTeam}
                        >
                            Cancel
                        </button>
                        <button
                            className={cx(
                                css.mappingsBtn,
                                css.secondMappingsBtn,
                                {
                                    [css.mappingsBtnDisabled]:
                                        !selectedClient || !selectedTeam
                                }
                            )}
                            onClick={() => handleScoreSave(employeeScoreArr)}
                            disabled={!selectedClient || !selectedTeam}
                        >
                            Save Mappings
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillMatrix;
