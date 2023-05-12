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
    categories,
    teams,
    fetchTeamList,
    masterTitle
}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [clientFormVisible, setclientFormVisible] = useState(false);
    const [categoryFormVisible, setcategoryFormVisible] = useState(false);

    useEffect(() => {
        console.log("hello");
        console.log(clientFormVisible);
    }, [clientFormVisible]);

    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        fetchCategoryList();
    }, [fetchCategoryList]);

    useEffect(() => {
        teams && fetchTeamList(clients.id);
    }, [fetchTeamList]);

    return (
        <div className={css.card_container}>
            <div>
                {masterTitle === "clients" && clients && (
                    <ButtonComponent
                        cname={css.add_button}
                        value={addbutton}
                        handleClick={() => {
                            setShowDrawer(!showDrawer);
                            setclientFormVisible(!clientFormVisible);
                        }}
                    />
                )}
                {masterTitle === "categories" && categories && (
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
            {teams && (
                <select className={css.clientdropdown}>
                    <option value="" disabled selected>
                        Select Client
                    </option>
                    {clients.length > 1 &&
                        clients.map(emp => (
                            <option key={emp.Id} value={emp.Id}>
                                {console.log(emp)}
                                {emp.clientName}
                            </option>
                        ))}
                </select>
            )}
            <div className={css.card_row}>
                {masterTitle === "clients" && clients && clients.length
                    ? clients.map((client, index) => {
                          return <CardsContainer key={index} client={client} />;
                      })
                    : masterTitle === "categories" &&
                      categories &&
                      categories.length > 0 &&
                      categories.map((categoryItem, index) => {
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
            {categories && categoryFormVisible && showDrawer && (
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
