import React from "react";
import ClientsCardContainer from "../components/ClientsCard/ClientsCardContainer";
import { useSelector, useStore } from "react-redux";

const CategoryPage = () => {
    return (
        <ClientsCardContainer
            addbutton={"Add Category"}
            masterTitle={"categories"}
        />
    );
};

export default CategoryPage;
