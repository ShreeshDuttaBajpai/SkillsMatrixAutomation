import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import TeamsComponent from "../TeamsComponent/TeamsComponent";
import css from "./CardsComponent.css";
import {
    editCategorySubcategories,
    editClientTeams,
    editTeamEmployees,
    getClientsTeamsList,
    getEmployeeList,
    getSubCategoryList,
    handleHeadChange
} from "./CardsComponentFunction";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { EmpListApi } from "../../services/EmployeeService/EmployeeService";
import TeamsContainer from "../TeamsComponent/TeamsContainer";
import { validateEditObj, validationInput } from "../commonValidationFunction";

const CardsComponent = ({
    client,
    categoryItem,
    getClient,
    getCategory,
    team,
    getEmp,
    fetchClientList,
    fetchCategoryList,
    fetchClientTeamsList
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
    const [editObj, setEditObj] = useState({});
    const [editObjErrors, setEditObjErrors] = useState({});

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

    useEffect(() => {
        client &&
            setEditObj({
                id: { ...client }.id,
                clientName: { ...client }.clientName,
                clientDescription: { ...client }.clientDescription,
                teams: teams.map(team => {
                    return { ...team };
                })
            });
        categoryItem &&
            setEditObj({
                id: { ...categoryItem }.id,
                categoryName: { ...categoryItem }.categoryName,
                categoryDescription: { ...categoryItem }.categoryDescription,
                subCategories: subcategory.map(subCat => {
                    return { ...subCat };
                })
            });
        team &&
            setEditObj({
                id: { ...team }.id,
                teamName: { ...team }.teamName,
                teamDescription: { ...team }.teamDescription,
                employees: employees.map(employee => {
                    return { ...employee };
                })
            });
        setEditObjErrors({});
    }, [
        isCardEditable,
        client,
        teams,
        categoryItem,
        subcategory,
        team,
        employees
    ]);

    useEffect(() => {
        console.log(editObjErrors);
        Object.keys(editObjErrors).length && console.log(editObjErrors);
        // if (client && Object.keys(editObjErrors).length) {
        //     const isErrorPresent = () => {
        //         if (editObjErrors.clientError) {
        //             if (editObjErrors.clientError.length) return true;
        //             else {
        //                 for (
        //                     let i = 0;
        //                     i < editObjErrors.teamErrors.length;
        //                     i++
        //                 ) {
        //                     if (editObjErrors.teamErrors[i].length) return true;
        //                 }
        //             }
        //         }
        //         return false;
        //     };
        //     !isErrorPresent() &&
        //         editClientTeams(editObj).then(async () => {
        //             setIsCardEditable(false);
        //             fetchClientList();
        //             setTeams(await getClientsTeamsList(client.id));
        //         });
        // }

        const isErrorPresent = (headTitle, subTitle) => {
            if (editObjErrors[`${headTitle}Error`]) {
                if (editObjErrors[`${headTitle}Error`].length) return true;
                else {
                    for (
                        let i = 0;
                        i < editObjErrors[`${subTitle}Errors`].length;
                        i++
                    ) {
                        if (editObjErrors[`${subTitle}Errors`][i].length)
                            return true;
                    }
                }
                return false;
            }
            return true;
        };
        !isErrorPresent(
            client ? "client" : categoryItem ? "category" : team && "team",
            client ? "team" : categoryItem ? "subCategory" : team && "employee"
        ) &&
            (client
                ? editClientTeams(editObj).then(async () => {
                      setIsCardEditable(false);
                      fetchClientList();
                      setTeams(await getClientsTeamsList(client.id));
                  })
                : categoryItem
                ? editCategorySubcategories(editObj).then(async () => {
                      setIsCardEditable(false);
                      fetchCategoryList();
                      setSubCategory(await getSubCategoryList(categoryItem.id));
                  })
                : team &&
                  editTeamEmployees(editObj).then(async () => {
                      setIsCardEditable(false);
                      fetchClientTeamsList(team.clientId);
                      setEmployees(await getEmployeeList(team.id));
                  }));
    }, [editObjErrors]);

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
                    {!isCardEditable ? (
                        <h3
                            className={css.card_heading}
                            data-text={
                                client
                                    ? client.clientName
                                    : categoryItem
                                    ? categoryItem.categoryName
                                    : team.teamName
                            }
                            title={
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
                    ) : (
                        <div className={css.headInputErrorContainer}>
                            <input
                                value={
                                    client
                                        ? editObj.clientName
                                        : categoryItem
                                        ? editObj.categoryName
                                        : team && editObj.teamName
                                }
                                onChange={e =>
                                    handleHeadChange(
                                        e,
                                        setEditObj,
                                        client
                                            ? "clientName"
                                            : categoryItem
                                            ? "categoryName"
                                            : team && "teamName"
                                    )
                                }
                            />
                            {client
                                ? editObjErrors.clientError &&
                                  editObjErrors.clientError.length > 0 && (
                                      <div className={css.errorMsgContainer}>
                                          {editObjErrors.clientError[0].error}
                                      </div>
                                  )
                                : categoryItem
                                ? editObjErrors.categoryError &&
                                  editObjErrors.categoryError.length > 0 && (
                                      <div className={css.errorMsgContainer}>
                                          {editObjErrors.categoryError[0].error}
                                      </div>
                                  )
                                : team &&
                                  editObjErrors.teamError &&
                                  editObjErrors.teamError.length > 0 && (
                                      <div className={css.errorMsgContainer}>
                                          {editObjErrors.teamError[0].error}
                                      </div>
                                  )}
                        </div>
                    )}
                    <div className={css.operationsBtnContainer}>
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
                                        setEditObjErrors(
                                            validateEditObj(
                                                editObj,
                                                "client",
                                                "team"
                                            )
                                        );
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
                                    if (!isCardEditable) {
                                        setShowDrawer(!showDrawer);
                                        setaddSubCategoryFormVisible(
                                            !addSubCategoryFormVisible
                                        );
                                    } else {
                                        setEditObjErrors(
                                            validateEditObj(
                                                editObj,
                                                "category",
                                                "subCategory"
                                            )
                                        );
                                    }
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
                                    if (!isCardEditable) {
                                        setShowDrawer(!showDrawer);
                                        setaddEmployeeFormVisible(
                                            !addEmployeeFormVisible
                                        );
                                    } else {
                                        setEditObjErrors(
                                            validateEditObj(
                                                editObj,
                                                "team",
                                                "employee"
                                            )
                                        );
                                    }
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
                                    editObj={editObj}
                                    setEditObj={setEditObj}
                                    editObjErrors={editObjErrors}
                                    index={index}
                                />
                            );
                        })}
                    {subcategory &&
                        subcategory.length > 0 &&
                        subcategory.map((sub, index) => {
                            return (
                                <TeamsContainer
                                    key={index}
                                    sub={sub}
                                    setSubCategories={setSubCategory}
                                    isCardEditable={isCardEditable}
                                    editObj={editObj}
                                    setEditObj={setEditObj}
                                    editObjErrors={editObjErrors}
                                    index={index}
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
                                    editObj={editObj}
                                    setEditObj={setEditObj}
                                    editObjErrors={editObjErrors}
                                    index={index}
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
                    setSubCategory={setSubCategory}
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
