import React from "react";
import ClientsCardContainer from "../components/ClientsCard/ClientsCardContainer";
import { useSelector, useStore } from "react-redux";

const CategoryPage = () => {
    const store = useStore();
    const category = useSelector(state => state.skillMatrixOps.category);
    console.log(category);
    return (
        <>
            <ClientsCardContainer
                addbutton={"Add Category"}
                category={category}
            />
        </>
    );
};

export default CategoryPage;
