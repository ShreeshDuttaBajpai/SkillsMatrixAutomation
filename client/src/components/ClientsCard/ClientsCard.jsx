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
    category,
    teams,
    fetchTeamList
}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [form2Visible, setForm2Visible] = useState(false);
    const [form3Visible, setForm3Visible] = useState(false);

    useEffect(() => {
        console.log("hello");
        console.log(form2Visible);
    }, [form2Visible]);

    useEffect(() => {
        fetchClientList();
    }, [fetchClientList]);

    useEffect(() => {
        fetchCategoryList();
    }, [fetchCategoryList]);

    useEffect(() => {
       teams && fetchTeamList(clients.id);
    }, [fetchTeamList])

    return (
        <div className={css.card_container}>
            <div>
                {clients && (
                    <ButtonComponent
                        cname={css.add_button}
                        value={addbutton}
                        handleClick={() => {
                            setShowDrawer(!showDrawer);
                            setForm2Visible(!form2Visible);
                        }}
                    />
                )}
                {category && (
                    <ButtonComponent
                        cname={css.add_button}
                        value={addbutton}
                        handleClick={() => {
                            setShowDrawer(!showDrawer);
                            setForm3Visible(!form3Visible);
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
            {clients && form2Visible && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    setForm2Visible={setForm2Visible}
                    form2Visible={form2Visible}
                />
            )}
            {category && form3Visible && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    setForm3Visible={setForm3Visible}
                    form3Visible={form3Visible}
                />
            )}
        </div>
    );
};

export default ClientsCard;
