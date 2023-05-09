import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import {
    getClientsTeamsList,
    getSubCategoryList
} from "./CardsComponentFunction";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

const CardsComponent = ({ client, categoryItem, getClient, getCategory }) => {
    const [teams, setTeams] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [form1Visible, setForm1Visible] = useState(false);
    const [form4Visible, setForm4Visible] = useState(false);
    const show = () => {
        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };
    const showDrawerStyle = {
        //position: "absolute",
        right: "0",
        transition: "0.4s",
        top: "0",
        left: "0",
        overflow: "hidden",
        opacity: "1",
        minheight: "100%",
        "z-index": "1"
    };
    const hideDrawerStyle = {
        position: "absolute",
        left: "100vw",
        top: "0",
        transition: "0.4s"
    };

    useEffect(() => {
        console.log("hello");
    }, [form4Visible]);

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
                    <h3
                        className={css.card_heading}
                        data-text={
                            client
                                ? client.clientName
                                : categoryItem.categoryName
                        }
                    >
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
                                setForm1Visible(!form1Visible);
                                getClient(client);
                                show();
                            }}
                        />
                    ) : (
                        <ButtonComponent
                            cname={css.add_button}
                            value={"Add SubCategory"}
                            handleClick={() => {
                                setShowDrawer(!showDrawer);
                                setForm4Visible(!form4Visible);
                                getCategory(categoryItem);
                            }}
                        />
                    )}
                    {console.log(categoryItem)}
                </div>
                <hr />
                <div className={css.scrollbar}>
                    <p className={css.teamlist}>
                        {teams &&
                            teams.length > 0 &&
                            teams.map((team, index) => {
                                console.log(team);
                                return (
                                    <TeamsComponent key={index} team={team} />
                                );
                            })}
                        {subcategory &&
                            subcategory.length > 0 &&
                            subcategory.map((sub, index) => {
                                console.log(sub);
                                return <TeamsComponent key={index} sub={sub} />;
                            })}
                    </p>
                </div>
            </div>
            <div
                style={showDrawer ? showDrawerStyle : hideDrawerStyle}
                className={css.hidescroll}
            >
                {client && (
                    <DrawerComponent
                        showDrawer={showDrawer}
                        setShowDrawer={setShowDrawer}
                        form1Visible={form1Visible}
                        setForm1Visible={setForm1Visible}
                        parentid={client.id}
                    />
                )}
                {categoryItem && (
                    <DrawerComponent
                        showDrawer={showDrawer}
                        setShowDrawer={setShowDrawer}
                        form4Visible={form4Visible}
                        setForm4Visible={setForm4Visible}
                        parentid={categoryItem.id}
                    />
                )}
            </div>
        </div>
    );
};

export default CardsComponent;
