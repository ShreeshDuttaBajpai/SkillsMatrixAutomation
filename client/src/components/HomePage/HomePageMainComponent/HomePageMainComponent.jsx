import React, { useState } from "react";
import css from "./HomepageMainComponent.css";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../auth.context";
import Cookies from "universal-cookie";
import { ButtonComponent } from "../../ButtonComponent/ButtonComponent";
import { Redirect } from "react-router-dom";
import { getClientsList } from "../../ClientsComponent/ClientsComponentFunctions";
import ClientsComponent from "../../ClientsComponent/ClientsComponent";

const HomePageMainComponent = props => {
    <script
        type="text/javascript"
        src="https://alcdn.msauth.net/lib/1.3.0/js/msal.js"
    ></script>;
    useEffect(async () => {
        setClients(await getClientsList());
    }, []);
    const [clients, setClients] = useState([]);

    return (
        <div className={css.homeContainerDiv}>
            <h2 className={css.homePageHeading}>Skill Matrix</h2>
            <div className={css.clientsContainerDiv}>
                {clients.length > 0 &&
                    clients.map((client, index) => {
                        return <ClientsComponent key={index} client={client} />;
                    })}
            </div>
            <ButtonComponent value={"Add Client"} cname={css.addClientBtn} />
        </div>
    );
};

export default HomePageMainComponent;
