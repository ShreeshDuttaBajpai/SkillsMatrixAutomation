import React, { useEffect, useState } from "react";
import css from "./SkillMatrix.css";
import cx from "classnames";
import { months } from "./SkillMatrixConstant";
import SkillMatrixTable from "../SkillMatrixTable/SkillMatrixTable";
import SkillMatrixTableContainer from "../SkillMatrixTable/SkillMatrixTableContainer";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import SubCategoryExpectedScoreContainer from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreContainer";
import SkillMatrixContainer from "../SkillMatrixComponent/SkillMatrixContainer";

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
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        setSelectedTeam("");
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
                                {console.log(team.teamName)}
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
            {/* <div className={css.dependentContainer}> */}
            {/* <AccordionContainer
                accordionTitle={"Categories"}
                accordionData={categories}
                selectedTeam={selectedTeam}
                // selectedMonth={selectedMonth}
                employee={employee}
                isAccordionDisabled={
                    !selectedClient || !selectedTeam || categories.length === 0
                }
            /> */}
            <SkillMatrixContainer employee={employee} />
            {/* </div> */}
            <div className={css.mappingsBtnContainer}>
                <button
                    className={cx(css.mappingsBtn, css.secondMappingsBtn, {
                        [css.mappingsBtnDisabled]:
                            !selectedClient || !selectedTeam
                    })}
                    onClick={() => fetchExpectedScore(selectedTeam)}
                    disabled={!selectedClient || !selectedTeam}
                >
                    Cancel
                </button>
                <button
                    className={cx(css.mappingsBtn, css.secondMappingsBtn, {
                        [css.mappingsBtnDisabled]:
                            !selectedClient || !selectedTeam
                    })}
                    onClick={() =>
                        handleScoreSave(selectedTeam, expectedScoreMappings)
                    }
                    disabled={!selectedClient || !selectedTeam}
                >
                    Save Mappings
                </button>
            </div>
        </div>
    );
};

export default SkillMatrix;
