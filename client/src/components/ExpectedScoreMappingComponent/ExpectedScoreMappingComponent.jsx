import React, { useEffect, useState } from "react";
import css from "./ExpectedScoreMapping.css";
import cx from "classnames";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import { handleScoreSave } from "./ExpectedScoreMappingFunctions";

const ExpectedScoreMappingComponent = ({
    clients,
    teams,
    categories,
    expectedScoreMappings,
    fetchCategoriesList,
    fetchClientList,
    fetchClientTeamsList,
    fetchExpectedScore
}) => {
    const [selectedClient, setSelectedClient] = useState();
    const [selectedTeam, setSelectedTeam] = useState();
    const [isAnyAccordionOpen, setIsAnyAccordionOpen] = useState(false);
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        setSelectedTeam();
        selectedClient !== undefined && fetchClientTeamsList(selectedClient);
    }, [selectedClient, fetchClientTeamsList]);

    useEffect(() => {
        fetchCategoriesList();
    }, [fetchCategoriesList]);

    useEffect(() => {
        selectedTeam && fetchExpectedScore(selectedTeam);
    }, [selectedTeam]);

    return (
        <div className={css.expectedScoreContainerDiv}>
            <div className={css.dependentContainer}>
                <AccordionContainer
                    accordionTitle={"Clients"}
                    accordionData={clients}
                    selectedItem={selectedClient}
                    setSelectedItem={setSelectedClient}
                    isAnyAccordionOpen={isAnyAccordionOpen}
                    setIsAnyAccordionOpen={setIsAnyAccordionOpen}
                />
                <AccordionContainer
                    accordionTitle={"Teams"}
                    accordionData={teams}
                    selectedItem={selectedTeam}
                    setSelectedItem={setSelectedTeam}
                    isAnyAccordionOpen={isAnyAccordionOpen}
                    setIsAnyAccordionOpen={setIsAnyAccordionOpen}
                    isAccordionDisabled={
                        selectedClient === undefined || teams.length === 0
                    }
                />
            </div>
            <AccordionContainer
                accordionTitle={"Categories"}
                accordionData={categories}
                selectedItem={selectedTeam}
                setSelectedItem={setSelectedTeam}
                isAnyAccordionOpen={isAnyAccordionOpen}
                setIsAnyAccordionOpen={setIsAnyAccordionOpen}
                isAccordionDisabled={
                    selectedClient === undefined ||
                    selectedTeam === undefined ||
                    categories.length === 0
                }
            />
            <button
                className={cx(css.mappingsSaveBtn, {
                    [css.mappingsSaveBtnDisabled]:
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
    );
};

export default ExpectedScoreMappingComponent;
