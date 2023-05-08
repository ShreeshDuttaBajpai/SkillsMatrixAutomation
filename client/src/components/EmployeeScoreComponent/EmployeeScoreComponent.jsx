import React, { useState, useEffect } from "react";
import css from "./EmployeeScoreComponent.css";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import cx from "classnames";
import { handleScoreSave } from "./EmployeeScoreFunctions";
import EmployeeSubCategoryScoreContainer from "../EmployeeSubCategoryScoreComponent/EmployeeSubCategoryScoreContainer";

const EmployeeScoreComponent = ({
    clients,
    teams,
    employees,
    categories,
    subCategories,
    employeeScores,
    fetchClientList,
    fetchClientTeamsList,
    fetchTeamEmployeesList,
    fetchCategoriesList,
    fetchSubCategoriesList,
    fetchEmployeeScores,
    setExpectedScores
}) => {
    const [isAnyAccordionOpen, setIsAnyAccordionOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState();
    const [selectedTeam, setSelectedTeam] = useState();
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    // const [employeeScoringArray, setEmployeeScoringArray] = useState([]);
    useEffect(() => {
        selectedEmployee &&
            categories.length > 0 &&
            setSelectedCategory(categories[0].id);
    }, [selectedEmployee]);
    useEffect(() => {
        fetchClientList();
        fetchCategoriesList();
    }, [fetchClientList, fetchCategoriesList]);

    useEffect(() => {
        setSelectedTeam();
        setSelectedEmployee();
        setSelectedCategory();
        setExpectedScores([]);
        selectedClient !== undefined && fetchClientTeamsList(selectedClient);
    }, [selectedClient, fetchClientTeamsList]);

    useEffect(() => {
        setSelectedEmployee();
        setSelectedCategory();
        setExpectedScores([]);
        selectedTeam !== undefined && fetchTeamEmployeesList(selectedTeam);
    }, [selectedTeam]);

    useEffect(() => {
        selectedCategory && fetchSubCategoriesList(selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        selectedEmployee && fetchEmployeeScores(selectedEmployee);
    }, [selectedEmployee]);

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
                                <EmployeeSubCategoryScoreContainer
                                    subCategoryScore={
                                        employeeScores.length > 0 &&
                                        employeeScores.find(
                                            score =>
                                                score.subCategoryId ===
                                                subCategory.id
                                        )
                                            ? employeeScores.find(
                                                  score =>
                                                      score.subCategoryId ===
                                                      subCategory.id
                                              ).employeeScore
                                            : 0
                                    }
                                    subCategory={subCategory}
                                    key={subCategory.id}
                                />
                            );
                        })}
                </ul>
            </div>
            <button
                className={css.scoresSaveBtn}
                onClick={() =>
                    handleScoreSave(selectedEmployee, employeeScores)
                }
            >
                Save Scores
            </button>
        </div>
    );
};

export default EmployeeScoreComponent;
