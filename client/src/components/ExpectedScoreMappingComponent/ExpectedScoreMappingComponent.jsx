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
    const [selectedClient, setSelectedClient] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("");
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

    return (
        <div className={css.expectedScoreContainerDiv}>
            <div className={css.dependentContainer}>
                <div className={css.selectionDiv}>
                    <select
                        name="clients"
                        id="clientsDropdown"
                        value={selectedClient}
                        onChange={e => setSelectedClient(e.target.value)}
                    >
                        <option value="">--- Clients ---</option>
                        {clients.length > 0 &&
                            clients.map(client => {
                                return (
                                    <option key={client.id} value={client.id}>
                                        {client.clientName}
                                    </option>
                                );
                            })}
                    </select>
                    <select
                        name="teams"
                        id="teamsDropdown"
                        value={selectedTeam}
                        onChange={e => setSelectedTeam(e.target.value)}
                        disabled={!selectedClient}
                        className={cx({
                            [css.disabledSelect]: !selectedClient
                        })}
                    >
                        <option value="">--- Teams ---</option>
                        {teams.length > 0 &&
                            teams.map(team => {
                                return (
                                    <option key={team.id} value={team.id}>
                                        {team.teamName}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className={css.mappingsBtnContainer}>
                    <button
                        className={cx(css.mappingsBtn, {
                            [css.mappingsBtnDisabled]:
                                !selectedClient || !selectedTeam
                        })}
                        onClick={() => {
                            fetchExpectedScore(selectedTeam);
                        }}
                        disabled={!selectedClient || !selectedTeam}
                    >
                        Cancel
                    </button>
                    <button
                        className={cx(css.mappingsBtn, {
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
            <AccordionContainer
                accordionTitle={"Categories"}
                accordionData={categories}
                selectedTeam={selectedTeam}
                isAccordionDisabled={
                    !selectedClient || !selectedTeam || categories.length === 0
                }
            />
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

export default ExpectedScoreMappingComponent;
