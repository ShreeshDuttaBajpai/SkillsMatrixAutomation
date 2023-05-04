import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import { getClientsTeamsList } from "./CardsComponentFunction";
import DrawerComponent from "../DrawerComponent/DrawerComponent";

const CardsComponent = ({ client }) => {
    const [teams, setTeams] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [form1Visible, setForm1Visible] = useState(false);
    const showDrawerStyle = {
        position: "absolute",
        right: "0",
        transition: "0.4s",
        top: "0",
        left: "0"
    };
    const hideDrawerStyle = {
        position: "absolute",
        left: "100vw",
        top: "0",
        transition: "0.4s"
    };

    useEffect(async () => {
        setTeams(await getClientsTeamsList(client.clientId));
    }, []);

    return (
        <div className={css.card_column}>
            <div className={css.card}>
                <div className={css.header}>
                    <h3 className={css.card_heading}>{client.clientName}</h3>
                    <span className={css.card_desc}>
                        <h5>({client.clientDescription})</h5>
                    </span>
                    <ButtonComponent
                        cname={css.add_button}
                        value={"Add Team"}
                        handleClick={() => {
                            console.log(client.clientName);
                            setShowDrawer(!showDrawer);
                            setForm1Visible(!form1Visible);
                        }}
                    />
                </div>
                <hr />
                <p className={css.teamlist}>
                    {teams.length > 0 &&
                        teams.map((team, index) => {
                            return <TeamsComponent key={index} team={team} />;
                        })}
                </p>
            </div>
            <div style={showDrawer ? showDrawerStyle : hideDrawerStyle}>
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    form1Visible={setForm1Visible}
                />
            </div>
        </div>
    );
};

export default CardsComponent;
