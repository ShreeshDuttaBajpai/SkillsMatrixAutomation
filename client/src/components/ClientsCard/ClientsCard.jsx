import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./ClientsCard.css";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import CardsContainer from "../CardsComponent/CardsContainer";

const ClientsCard = ({
    addbutton,
    fetchClientList,
    clients,
    fetchCategoryList,
    category
}) => {
    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);
    useEffect(() => {
        fetchCategoryList();
    }, [fetchCategoryList]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [form2Visible, setForm2Visible] = useState(false);
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

    useEffect(() => {
        console.log("hello");
        console.log(form2Visible);
    }, [form2Visible]);

    return (
        <div className={css.card_container}>
            <div>
                <ButtonComponent
                    cname={css.add_button}
                    value={addbutton}
                    handleClick={() => {
                        setShowDrawer(!showDrawer);
                        setForm2Visible(!form2Visible);
                    }}
                />
            </div>
            <div className={css.card_row}>
                {clients.length > 0 &&
                    clients.map((client, index) => {
                        return <CardsContainer key={index} client={client} />;
                    })}
            </div>
            {form2Visible && (
                <div style={showDrawer ? showDrawerStyle : hideDrawerStyle}>
                    <DrawerComponent
                        showDrawer={showDrawer}
                        setShowDrawer={setShowDrawer}
                        setForm2Visible={setForm2Visible}
                        form2Visible={form2Visible}
                    />
                </div>
            )}
        </div>
    );
};

export default ClientsCard;
