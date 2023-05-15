import React from "react";
import ClientsCardContainer from "../components/ClientsCard/ClientsCardContainer";
import { useSelector } from "react-redux";
import TeamCardsContainer from "../components/TeamCards/TeamCardsContainer";

const EmployeePage = () => {
    const teams = useSelector(state => state.skillMatrixOps.teams);
    const clients = useSelector(state => state.skillMatrixOps.clients);
    console.log(teams);
    return <TeamCardsContainer />;
};

export default EmployeePage;
