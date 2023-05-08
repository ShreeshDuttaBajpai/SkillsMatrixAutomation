import React from "react";
import ClientsCardContainer from "../components/ClientsCard/ClientsCardContainer";
import { useSelector, useStore } from "react-redux";

const HomePage = () => {
    const store = useStore();
    const clients = useSelector(state => state.skillMatrixOps.clients);
    console.log(clients);
    return (
        <>
            <ClientsCardContainer addbutton={"Add Client"} clients={clients} />
        </>
    );
};

export default HomePage;
