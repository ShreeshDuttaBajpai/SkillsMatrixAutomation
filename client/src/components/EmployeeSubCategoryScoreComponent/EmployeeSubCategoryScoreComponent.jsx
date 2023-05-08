import React from "react";
import css from "./EmployeeSubCategoryScoreComponent.css";
import { handleEmployeeScoreChange } from "./EmployeeSubCategoryScoreFunctions";
import { useEffect } from "react";
import { useState } from "react";

const EmployeeSubCategoryScoreComponent = ({
    subCategory,
    subCategoryScore,
    employeeScores,
    setExpectedScores
}) => {
    const [employeeSubCategoryScore, setEmployeeSubCategoryScore] =
        useState(subCategoryScore);
    useEffect(() => {
        setEmployeeSubCategoryScore(subCategoryScore);
        console.log(subCategoryScore);
    }, [subCategoryScore]);
    return (
        <li className={css.subCategoryListLi} key={subCategory.id}>
            {subCategory.subCategoryName}
            <select
                className={css.employeeScoreDropdown}
                onChange={e =>
                    handleEmployeeScoreChange(
                        e,
                        subCategory.id,
                        employeeScores,
                        setExpectedScores,
                        setEmployeeSubCategoryScore
                    )
                }
                value={employeeSubCategoryScore}
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </li>
    );
};

export default EmployeeSubCategoryScoreComponent;
