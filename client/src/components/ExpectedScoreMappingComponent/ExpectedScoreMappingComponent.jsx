import React, { useEffect, useState } from "react";
import css from "./ExpectedScoreMapping.css";
import cx from "classnames";
import { DataListContainer } from "../DataListComponent/DataListContainer";
import CategoryComponent from "../Categories/CategoryComponent";

const ExpectedScoreMappingComponent = ({
    clients,
    teams,
    fetchClientList,
    fetchClientTeamsList
}) => {
    const [selectedClient, setSelectedClient] = useState();
    const [selectedTeam, setSelectedTeam] = useState();
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        setSelectedTeam();
        selectedClient !== undefined && fetchClientTeamsList(selectedClient);
    }, [selectedClient]);

    return (
        <div className={css.expectedScoreContainerDiv}>
            <div className={css.accordionBtnDiv}>
                <button className={css.accordionBtn}>
                    Clients
                    <br />
                    <em>None selected</em>
                </button>
            </div>
            <div className={css.accordionBtnDiv}>
                <button className={css.accordionBtn}>
                    Teams
                    <br />
                    <em>None selected</em>
                </button>
            </div>
            {/* <div className={css.clientListDiv}>
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
            </div> */}
        </div>
    );
};

export default ExpectedScoreMappingComponent;
