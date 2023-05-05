import React, { useState, useEffect } from "react";
import css from "./EmployeeScoreComponent.css";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import cx from "classnames";
import {
    handleEmployeeScoreChange,
    handleScoreSave
} from "./EmployeeScoreFunctions";

const EmployeeScoreComponent = ({
    clients,
    teams,
    employees,
    categories,
    subCategories,
    fetchClientList,
    fetchClientTeamsList,
    fetchTeamEmployeesList,
    fetchCategoriesList,
    fetchSubCategoriesList
}) => {
    const [isAnyAccordionOpen, setIsAnyAccordionOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState();
    const [selectedTeam, setSelectedTeam] = useState();
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [employeeScoringArray, setEmployeeScoringArray] = useState([]);
    useEffect(() => {
        fetchClientList();
        fetchCategoriesList();
    }, [fetchClientList, fetchCategoriesList]);

    useEffect(() => {
        setSelectedTeam();
        setSelectedEmployee();
        selectedClient !== undefined && fetchClientTeamsList(selectedClient);
    }, [selectedClient, fetchClientTeamsList]);

    useEffect(() => {
        setSelectedEmployee();
        selectedTeam !== undefined && fetchTeamEmployeesList(selectedTeam);
    }, [selectedTeam]);

    useEffect(() => {
        selectedCategory && fetchSubCategoriesList(selectedCategory);
    }, [selectedCategory]);

    return (
        <div className={css.employeeScoreContainer}>
            <div className={css.dependentContainer}>
                <AccordionContainer
                    accordionTitle={"Clients"}
                    accordionData={clients}
                    isAnyAccordionOpen={isAnyAccordionOpen}
                    setIsAnyAccordionOpen={setIsAnyAccordionOpen}
                    selectedItem={selectedClient}
                    setSelectedItem={setSelectedClient}
                />
                <AccordionContainer
                    accordionTitle={"Teams"}
                    accordionData={teams}
                    isAnyAccordionOpen={isAnyAccordionOpen}
                    setIsAnyAccordionOpen={setIsAnyAccordionOpen}
                    selectedItem={selectedTeam}
                    setSelectedItem={setSelectedTeam}
                />
            </div>
            <div className={css.employeeListContainer}>
                {selectedTeam &&
                    employees.map(employee => {
                        return (
                            <div
                                className={cx(css.employeePaper, {
                                    [css.selectedDataItem]:
                                        selectedEmployee === employee.employeeId
                                })}
                                key={employee.employeeId}
                                onClick={() => {
                                    setSelectedCategory();
                                    setSelectedEmployee(employee.employeeId);
                                }}
                            >
                                {employee.employeeName}
                            </div>
                        );
                    })}
            </div>
            <div className={css.scoreGridContainer}>
                <ul className={css.categoryListUl}>
                    {categories.length > 0 &&
                        categories.map(category => {
                            return (
                                <li
                                    className={cx(css.categoryListLi, {
                                        [css.disabledCategoryOptions]:
                                            selectedEmployee === undefined,
                                        [css.selectedDataItem]:
                                            selectedCategory === category.id
                                    })}
                                    key={category.id}
                                    onClick={() =>
                                        setSelectedCategory(category.id)
                                    }
                                >
                                    {category.categoryName}
                                </li>
                            );
                        })}
                </ul>
                <ul className={css.subCategoryListUl}>
                    {selectedEmployee &&
                        selectedCategory &&
                        subCategories.length > 0 &&
                        subCategories.map(subCategory => {
                            return (
                                <li
                                    className={css.subCategoryListLi}
                                    key={subCategory.id}
                                >
                                    {subCategory.subCategoryName}
                                    <select
                                        className={css.employeeScoreDropdown}
                                        onChange={e =>
                                            handleEmployeeScoreChange(
                                                e,
                                                subCategory.id,
                                                employeeScoringArray,
                                                setEmployeeScoringArray
                                            )
                                        }
                                    >
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <button
                className={css.scoresSaveBtn}
                onClick={() =>
                    handleScoreSave(selectedEmployee, employeeScoringArray)
                }
            >
                Save Scores
            </button>
        </div>
    );
};

export default EmployeeScoreComponent;
