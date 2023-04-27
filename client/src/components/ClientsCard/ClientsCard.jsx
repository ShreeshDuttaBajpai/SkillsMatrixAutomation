import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import CardsComponent from "../CardsComponent/CardsComponent";
import { getClientsList } from "../CardsComponent/CardsComponentFunction";
import css from "./ClientsCard.css";

const ClientsCard = props => {
    useEffect(async () => {
        setClients(await getClientsList());
    }, []);
    const [clients, setClients] = useState([]);
    return (
        <div className={css.card_container}>
            <div>
                <ButtonComponent cname={css.add_button} value={"Add Client"} />
            </div>
            <div className={css.card_row}>
                {clients.length > 0 &&
                    clients.map((client, index) => {
                        return <CardsComponent key={index} client={client} />;
                    })}
            </div>
        </div>
    );
};

export default ClientsCard;
