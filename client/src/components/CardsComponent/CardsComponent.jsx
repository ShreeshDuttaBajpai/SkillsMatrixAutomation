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
import TeamsContainer from "../TeamsComponent/TeamsContainer";

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
    const [subcategory, setSubCategory] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [addTeamFormVisible, setaddTeamFormVisible] = useState(false);
    const [addSubCategoryFormVisible, setaddSubCategoryFormVisible] =
        useState(false);
    const [addEmployeeFormVisible, setaddEmployeeFormVisible] = useState(false);
    const [isCardEditable, setIsCardEditable] = useState(false);

    useEffect(() => {
        console.log("hello");
    }, [addSubCategoryFormVisible]);

    useEffect(async () => {
        client && setTeams(await getClientsTeamsList(client.id));
    }, []);

    useEffect(async () => {
        categoryItem &&
            setSubCategory(await getSubCategoryList(categoryItem.id));
    }, []);

    useEffect(async () => {
        team && setEmployees(await getEmployeeList(team.id));
    }, [team]);

    console.log(team);

    function getEmployeesByTeamId(employees, team) {
        const filteredEmployees = employees.filter(
            employee => employee.teamId === team.id
        );
        return filteredEmployees;
    }

    const matchedEmployees = getEmployeesByTeamId(employees, team);

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
                    <div>
                        <ButtonComponent
                            cname={css.add_button}
                            value={!isCardEditable ? "Edit" : "Cancel"}
                            handleClick={() => {
                                setIsCardEditable(prev => !prev);
                            }}
                        />
                        {client && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={!isCardEditable ? "Add Team" : "Save"}
                                handleClick={() => {
                                    if (!isCardEditable) {
                                        setShowDrawer(!showDrawer);
                                        setaddTeamFormVisible(
                                            !addTeamFormVisible
                                        );
                                        getClient(client);
                                    } else {
                                    }
                                }}
                            />
                        )}
                        {categoryItem && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={
                                    !isCardEditable ? "Add SubCategory" : "Save"
                                }
                                handleClick={() => {
                                    setShowDrawer(!showDrawer);
                                    setaddSubCategoryFormVisible(
                                        !addSubCategoryFormVisible
                                    );
                                    getCategory(categoryItem);
                                }}
                            />
                        )}
                        {team && (
                            <ButtonComponent
                                cname={css.add_button}
                                value={
                                    !isCardEditable ? "Add Employee" : "Save"
                                }
                                handleClick={() => {
                                    setShowDrawer(!showDrawer);
                                    setaddEmployeeFormVisible(
                                        !addEmployeeFormVisible
                                    );
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
                            return (
                                <TeamsContainer
                                    key={index}
                                    team={team}
                                    setTeams={setTeams}
                                    isCardEditable={isCardEditable}
                                />
                            );
                        })}
                    {subcategories &&
                        subcategories.length > 0 &&
                        subcategories.map((sub, index) => {
                            return (
                                <TeamsContainer
                                    key={index}
                                    sub={sub}
                                    setSubCategories={setSubCategories}
                                    isCardEditable={isCardEditable}
                                />
                            );
                        })}
                    {employees &&
                        employees.length > 0 &&
                        employees.map((employee, index) => {
                            return (
                                <TeamsContainer
                                    key={index}
                                    employee={employee}
                                    isCardEditable={isCardEditable}
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
            {team && showDrawer && (
                <DrawerComponent
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    addEmployeeFormVisible={addEmployeeFormVisible}
                    setaddEmployeeFormVisible={setaddEmployeeFormVisible}
                    parentid={team.id}
                    setEmployees={setEmployees}
                />
            )}
        </div>
    );
};

export default CardsComponent;
