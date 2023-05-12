import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import {
    getClientsTeamsList,
    getEmployeeList,
    getSubCategoryList
} from "./CardsComponentFunction";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { EmpListApi } from "../../services/EmployeeService/EmployeeService";

const CardsComponent = ({
    client,
    categoryItem,
    getClient,
    getCategory,
    team,
    getEmp
}) => {
    const [employees, setEmployees] = useState([]);
    const [teams, setTeams] = useState([]);
    const [subcategories, setSubCategories] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [addTeamFormVisible, setaddTeamFormVisible] = useState(false);
    const [addSubCategoryFormVisible, setaddSubCategoryFormVisible] =
        useState(false);
    const [form5Visible, setForm5Visible] = useState(false);

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
            setSubCategories(await getSubCategoryList(categoryItem.id));
    }, []);

    useEffect(async () => {
        team && setEmployees(await getEmployeeList(team.id));
    }, []);

    console.log(team);

    return (
        <div className={css.card_column}>
            <div className={css.card}>
                <div className={css.header}>
                    <h3
                        className={css.card_heading}
                        data-text={
                            client
                                ? client.clientName
                                : categoryItem
                                ? categoryItem.categoryName
                                : team.teamName
                        }
                    >
                        {client && client.clientName}{" "}
                        {categoryItem && categoryItem.categoryName}
                        {team && team.teamName}
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
                    <div>
                        <ButtonComponent
                            cname={css.add_button}
                            value={"Edit"}
                        />
                        {client && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={"Add Team"}
                                handleClick={() => {
                                    setShowDrawer(!showDrawer);
                                    setaddTeamFormVisible(!addTeamFormVisible);
                                    getClient(client);
                                }}
                            />
                        )}
                        {categoryItem && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={"Add SubCategory"}
                                handleClick={() => {
                                    setShowDrawer(!showDrawer);
                                    setaddSubCategoryFormVisible(
                                        !addSubCategoryFormVisible
                                    );
                                    getCategory(categoryItem);
                                }}
                            />
                        )}
                        {console.log(categoryItem)}
                        {team && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={"Add Employee"}
                                handleClick={() => {
                                    setShowDrawer(!showDrawer);
                                    setForm5Visible(!form5Visible);
                                    getEmp(team);
                                }}
                            />
                        )}
                    </div>
                </div>

                <hr />
                <div className={css.teamlist}>
                    {teams &&
                        teams.length > 0 &&
                        teams.map((team, index) => {
                            console.log(team);
                            return <TeamsComponent key={index} team={team} />;
                        })}
                    {subcategories &&
                        subcategories.length > 0 &&
                        subcategories.map((sub, index) => {
                            console.log(sub);
                            return <TeamsComponent key={index} sub={sub} />;
                        })}
                    {console.log(employees)}
                    {employees &&
                        employees.length > 0 &&
                        employees.map((employee, index) => {
                            console.log(employee);
                            return (
                                <TeamsComponent
                                    key={index}
                                    employee={employee}
                                />
                            );
                        })}
                </div>
            </div>
            {client && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    addTeamFormVisible={addTeamFormVisible}
                    setaddTeamFormVisible={setaddTeamFormVisible}
                    parentid={client.id}
                    setTeams={setTeams}
                />
            )}
            {categoryItem && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    addSubCategoryFormVisible={addSubCategoryFormVisible}
                    setaddSubCategoryFormVisible={setaddSubCategoryFormVisible}
                    parentid={categoryItem.id}
                    setSubCategories={setSubCategories}
                />
            )}
            {team && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    form5Visible={form5Visible}
                    setForm5Visible={setForm5Visible}
                    parentid={team.id}
                />
            )}
        </div>
    );
};

export default CardsComponent;
