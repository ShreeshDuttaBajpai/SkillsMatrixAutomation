import React, { useState } from "react";
import css from "./SkillMatrixComponent.css";
import cx from "classnames";
import { useEffect } from "react";
import EmployeeScoreContainer from "../EmployeeScoreComponent/EmployeeScoreContainer";

const SkillMatrixComponent = ({
    skillMatrixData,
    fetchSkillMatrixTable,
    fetchCategoriesList,
    categories,
    subCategories,
    fetchSubCategoriesList,
    employee,
    fetchEmployeeScore,
    selectedTeam,
    employeeScores,
    expectedScoreMappings,
    employeeScoreArr,
    setEmployeeScoreArr
}) => {
    useEffect(() => {
        selectedTeam && fetchEmployeeScore(selectedTeam);
    }, [selectedTeam, fetchEmployeeScore]);
    useEffect(() => {
        fetchSkillMatrixTable();
    }, [fetchSkillMatrixTable]);
    useEffect(() => {
        fetchSubCategoriesList();
    }, [fetchSubCategoriesList]);
    // useEffect(() => {
    //     fetchCategoriesList();
    // }, fetchCategoriesList);
    console.log(expectedScoreMappings);

    const employeeCount = employee ? employee.length : 0;
    const columnWidth = 100 / (employeeCount + 2);

    const sumscore = categories.map(category => {
        const categorySubCategories = subCategories.filter(
            subCategory => subCategory.categoryId === category.id
        );

        const subCategoryScores = categorySubCategories.map(subCategory => {
            return expectedScoreMappings
                .filter(empscore => empscore.subCategoryId === subCategory.id)
                .reduce((a, v) => a + v.expectedClientScore, 0);
        });

        return subCategoryScores.reduce((a, v) => a + v, 0);
    });

    console.log(sumscore);

    return (
        <div className={css.skillMatrixPageContainer}>
            <div className={css.skillMatrixGridContainer}>
                <div className={css.skillMatrixGridHeader}>
                    <div
                        className={css.skillMatrixGridHeadingItem}
                        //style={{ width: `${columnWidth}%` }}
                    >
                        Category
                    </div>
                    <div
                        className={css.skillMatrixGridHeadingItem}
                        //style={{ width: `${columnWidth}%` }}
                    >
                        Client Expected Score
                    </div>
                    {employee &&
                        employee.map((emp, index) => {
                            return (
                                <div
                                    className={css.skillMatrixGridHeadingItem}
                                    key={index}
                                    //style={{ width: `${columnWidth}%` }}
                                >
                                    {emp.employeeName}
                                </div>
                            );
                        })}
                </div>
                <div className={css.skillMatrixGridBody}>
                    {categories.map((category, index) => {
                        return (
                            <div
                                className={cx(css.skillMatrixGridRow, {
                                    // [css.removeBorder]:
                                    //     index + 1 === skillMatrixData.length
                                })}
                                key={index}
                            >
                                <div className={css.skillMatrixGridItemCol}>
                                    <h5 className={css.categoryname}>
                                        {category.categoryName}
                                    </h5>
                                    {subCategories
                                        .filter(
                                            subCategory =>
                                                subCategory.categoryId ===
                                                category.id
                                        )
                                        .map((subCategory, index) => (
                                            <div
                                                className={css.subcategoryname}
                                                key={index}
                                            >
                                                {subCategory.subCategoryName}
                                            </div>
                                        ))}
                                </div>
                                <div className={css.skillMatrixGridItemInput}>
                                    <div className={css.inputbox}>
                                        Sum : {sumscore[index]}
                                    </div>

                                    {subCategories
                                        .filter(
                                            subCategory =>
                                                subCategory.categoryId ===
                                                category.id
                                        )
                                        .map((subCategory, index) => (
                                            <div
                                                className={
                                                    css.subCategoryScoreSelect
                                                }
                                                key={index}
                                            >
                                                {expectedScoreMappings
                                                    .filter(
                                                        empscore =>
                                                            empscore.subCategoryId ===
                                                            subCategory.id
                                                    )
                                                    .map((client, index) => (
                                                        <div
                                                            className={
                                                                css.inputfeilds
                                                            }
                                                            key={index}
                                                        >
                                                            {
                                                                client.expectedClientScore
                                                            }
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                </div>

                                {employee &&
                                    employee.map((emp, index) => {
                                        return (
                                            <div
                                                className={
                                                    css.skillMatrixGridItem
                                                }
                                                key={index}
                                            >
                                                {subCategories
                                                    .filter(
                                                        subCategory =>
                                                            subCategory.categoryId ===
                                                            category.id
                                                    )
                                                    .map(
                                                        (
                                                            subCategory,
                                                            index
                                                        ) => (
                                                            <EmployeeScoreContainer
                                                                emp={emp}
                                                                subCategory={
                                                                    subCategory
                                                                }
                                                                key={index}
                                                                employeeScoreArr={
                                                                    employeeScoreArr
                                                                }
                                                                setEmployeeScoreArr={
                                                                    setEmployeeScoreArr
                                                                }
                                                            />
                                                        )
                                                    )}
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillMatrixComponent;
