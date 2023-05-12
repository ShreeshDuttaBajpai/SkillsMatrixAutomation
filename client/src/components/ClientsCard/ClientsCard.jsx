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
    const [clientFormVisible, setclientFormVisible] = useState(false);
    const [categoryFormVisible, setcategoryFormVisible] = useState(false);

    useEffect(() => {
        console.log("hello");
        console.log(showDrawer);
        console.log(clientFormVisible);
    }, [clientFormVisible]);

    return (
        <div className={css.card_container}>
            <div>
                {clients ? (
                    <ButtonComponent
                        cname={css.add_button}
                        value={addbutton}
                        handleClick={() => {
                            setShowDrawer(!showDrawer);
                            setclientFormVisible(!clientFormVisible);
                        }}
                    />
                ) : (
                    <ButtonComponent
                        cname={css.add_button}
                        value={addbutton}
                        handleClick={() => {
                            setShowDrawer(!showDrawer);
                            setcategoryFormVisible(!categoryFormVisible);
                        }}
                    />
                )}
            </div>
            <div className={css.card_row}>
                {clients &&
                    clients.length &&
                    clients.map((client, index) => {
                        return <CardsContainer key={index} client={client} />;
                    })}
                {category &&
                    category.length > 0 &&
                    category.map((categoryItem, index) => {
                        return (
                            <CardsContainer
                                key={index}
                                categoryItem={categoryItem}
                            />
                        );
                    })}
            </div>
            {clients && clientFormVisible && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    setclientFormVisible={setclientFormVisible}
                    clientFormVisible={clientFormVisible}
                />
            )}
            {category && categoryFormVisible && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    setcategoryFormVisible={setcategoryFormVisible}
                    categoryFormVisible={categoryFormVisible}
                />
            )}
        </div>
    );
};

export default ClientsCard;
