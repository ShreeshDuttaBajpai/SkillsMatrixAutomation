import React from "react";
import ClientsCardContainer from "../components/ClientsCard/ClientsCardContainer";
import { useSelector, useStore } from "react-redux";

const HomePage = () => {
    return (
        <ClientsCardContainer
            addbutton={"Add Client"}
            masterTitle={"clients"}
        />
    );
};

export default HomePage;
