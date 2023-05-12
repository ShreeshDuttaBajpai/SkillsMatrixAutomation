import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import {
    getClientsTeamsList,
    getSubCategoryList
} from "./CardsComponentFunction";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

const CardsComponent = ({ client, categoryItem, getClient }) => {
    const [teams, setTeams] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [addTeamFormVisible, setaddTeamFormVisible] = useState(false);
    const [addSubCategoryFormVisible, setaddSubCategoryFormVisible] =
        useState(false);

    useEffect(() => {
        console.log("hello");
    }, [addSubCategoryFormVisible]);

    // useEffect(() => {
    //     fetchClientTeamsList(client.id);
    // }, [fetchClientTeamsList]);

    useEffect(async () => {
        client && setTeams(await getClientsTeamsList(client.id));
    }, []);

    useEffect(async () => {
        categoryItem &&
            setSubCategory(await getSubCategoryList(categoryItem.id));
    }, []);
    return (
        <div className={css.card_column}>
            <div className={css.card}>
                <div className={css.header}>
                    <h3 className={css.card_heading}>
                        {client ? client.clientName : categoryItem.categoryName}
                    </h3>
                    {/* <span className={css.card_desc}>
                        <h5>
                            (
                            {client
                                ? client.clientDescription
                                : categoryItem.categoryDescription}
                            )
                        </h5>
                    </span> */}
                    {client ? (
                        <ButtonComponent
                            cname={css.add_button}
                            value={"Add Team"}
                            handleClick={() => {
                                setShowDrawer(!showDrawer);
                                setaddTeamFormVisible(!addTeamFormVisible);
                                getClient(client);
                            }}
                        />
                    ) : (
                        <ButtonComponent
                            cname={css.add_button}
                            value={"Add SubCategory"}
                            handleClick={() => {
                                setShowDrawer(!showDrawer);
                                setaddSubCategoryFormVisible(
                                    !addSubCategoryFormVisible
                                );
                                getClient(categoryItem);
                            }}
                        />
                    )}
                </div>
                <hr />
                <p className={css.teamlist}>
                    {teams &&
                        teams.length > 0 &&
                        teams.map((team, index) => {
                            console.log(team);
                            return <TeamsComponent key={index} team={team} />;
                        })}
                    {subcategory &&
                        subcategory.length > 0 &&
                        subcategory.map((sub, index) => {
                            console.log(sub);
                            return <TeamsComponent key={index} sub={sub} />;
                        })}
                </p>
            </div>
            {client && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    addTeamFormVisible={addTeamFormVisible}
                    setaddTeamFormVisible={setaddTeamFormVisible}
                    parentid={client.id}
                />
            )}
            {categoryItem && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    addSubCategoryFormVisible={addSubCategoryFormVisible}
                    setaddSubCategoryFormVisible={setaddSubCategoryFormVisible}
                    parentid={categoryItem.id}
                />
            )}
        </div>
    );
};

export default CardsComponent;
