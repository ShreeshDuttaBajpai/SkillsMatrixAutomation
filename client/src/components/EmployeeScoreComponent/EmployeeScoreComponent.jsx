import React, { useState, useEffect } from "react";
import css from "./EmployeeScoreComponent.css";
import AccordionContainer from "../AccordionComponent/AccordionContainer";
import cx from "classnames";
import { handleScoreSave } from "./EmployeeScoreFunctions";
import EmployeeSubCategoryScoreContainer from "../EmployeeSubCategoryScoreComponent/EmployeeSubCategoryScoreContainer";
import { handleExpectedScoreChange } from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreFunctions";

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
    setExpectedScores,
    employee,
    subCategory,
    expectedScoreMappings,
    setExpectedScoreMappings
}) => {
    // const [isAnyAccordionOpen, setIsAnyAccordionOpen] = useState(false);
    // const [selectedClient, setSelectedClient] = useState();
    // const [selectedTeam, setSelectedTeam] = useState();
    // const [selectedEmployee, setSelectedEmployee] = useState();
    // const [selectedCategory, setSelectedCategory] = useState();
    // useEffect(() => {
    //     selectedEmployee &&
    //         categories.length > 0 &&
    //         setSelectedCategory(categories[0].id);
    // }, [selectedEmployee]);
    // useEffect(() => {
    //     fetchClientList();
    //     fetchCategoriesList();
    // }, [fetchClientList, fetchCategoriesList]);

    // useEffect(() => {
    //     setSelectedTeam();
    //     setSelectedEmployee();
    //     setSelectedCategory();
    //     setExpectedScores([]);
    //     selectedClient !== undefined && fetchClientTeamsList(selectedClient);
    // }, [selectedClient, fetchClientTeamsList]);

    // useEffect(() => {
    //     setSelectedEmployee();
    //     setSelectedCategory();
    //     setExpectedScores([]);
    //     selectedTeam !== undefined && fetchTeamEmployeesList(selectedTeam);
    // }, [selectedTeam]);

    // useEffect(() => {
    //     selectedCategory && fetchSubCategoriesList(selectedCategory);
    // }, [selectedCategory]);

    // useEffect(() => {
    //     selectedEmployee && fetchEmployeeScores(selectedEmployee);
    // }, [selectedEmployee]);
    const [subCategoryScore, setSubCategoryScore] = useState(0);

    useEffect(() => {
        setSubCategoryScore(
            expectedScoreMappings.length > 0 &&
                expectedScoreMappings.find(
                    score => score.subCategoryId === subCategory.id
                )
                ? expectedScoreMappings.find(
                      score => score.subCategoryId === subCategory.id
                  ).expectedClientScore
                : 0
        );
    }, [expectedScoreMappings]);

    console.log(subCategory);

    return (
        <div key={subCategory.id} className={css.subCategoryLi}>
            <div className={css.subCategoryDiv}>
                {subCategory.subCategoryName}
            </div>
            <div className={css.subCategoryScoreSelect}>
                <select
                    onChange={e => {
                        handleExpectedScoreChange(
                            e,
                            subCategory.id,
                            expectedScoreMappings,
                            setExpectedScoreMappings,
                            setSubCategoryScore
                        );
                    }}
                    value={subCategoryScore}
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            {employee.map(emp => {
                return (
                    <div className={css.subCategoryScoreSelect}>
                        <select
                            onChange={e => {
                                handleExpectedScoreChange(
                                    e,
                                    subCategory.id,
                                    expectedScoreMappings,
                                    setExpectedScoreMappings,
                                    setSubCategoryScore
                                );
                            }}
                            value={subCategoryScore}
                        >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

export default EmployeeScoreComponent;
