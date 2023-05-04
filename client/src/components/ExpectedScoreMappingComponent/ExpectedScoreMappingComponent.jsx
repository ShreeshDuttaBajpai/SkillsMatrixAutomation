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
    fetchClientTeamsList
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
                />
            </div>
            <AccordionContainer
                accordionTitle={"Categories"}
                accordionData={categories}
                selectedItem={selectedTeam}
                setSelectedItem={setSelectedTeam}
                isAnyAccordionOpen={isAnyAccordionOpen}
                setIsAnyAccordionOpen={setIsAnyAccordionOpen}
            />
            <button
                className={css.mappingsSaveBtn}
                onClick={() =>
                    handleScoreSave(selectedTeam, expectedScoreMappings)
                }
            >
                Save Mappings
            </button>
            {/*  <div className={css.expectedScoreContainerDiv}>
            <div className={css.accordionBtnDiv}>
                <button className={css.accordionBtn}>
                    Teams
                    <br />
                    <em>None selected</em>
                </button>
            </div>
            <div className={css.clientListDiv}>
                <h3>Clients</h3>
                <ul className={css.dataListUl}>
                    {clients.map((client, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setSelectedClient(index)}
                                className={cx(css.dataListLi, {
                                    [css.selectedClientItem]:
                                        selectedClient === index
                                })}
                            >
                                {client.clientName}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={css.teamListDiv}>
                <h3>Teams</h3>
                <ul className={css.dataListUl}>
                    {teams.map((team, index) => {
                        return (
                            <li
                                key={index}
                                // onClick={() => setSelectedClient(index)}
                                className={cx(css.dataListLi, {
                                    [css.selectedClientItem]:
                                        selectedClient === index
                                })}
                            >
                                {team.teamName}
                            </li>
                        );
                    })}
                </ul>
            </div> */}
            {/* <DataListContainer
                data={clients}
                selectedOptions={selectedClient}
                setSelectedOptions={setSelectedClient}
                listType={"client"}
            />
            <DataListContainer
                data={teams}
                listType={"team"}
                selectedOptions={selectedTeam}
                setSelectedOptions={setSelectedTeam}
            />
            <div className={css.categoryScoringDiv}>
                <CategoryComponent />
            </div>
        </div>*/}
        </div>
    );
};

export default ExpectedScoreMappingComponent;
