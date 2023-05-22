import React, { useState, useEffect } from "react";
import css from "./EmployeeScoreComponent.css";
import { handleEmployeeScoreChange } from "./EmployeeScoreFunctions";

const EmployeeScoreComponent = ({
    emp,
    subCategory,
    employeeScores,
    employeeScoreArr,
    setEmployeeScoreArr
}) => {
    const [employeeScore, setEmployeeScore] = useState(0);

    useEffect(() => {
        setEmployeeScore(employeeScores);
    }, [employeeScores]);

    console.log(employeeScoreArr);

    useEffect(() => {
        employeeScoreArr.length > 0 &&
            employeeScoreArr.find(
                score =>
                    score.subCategoryId === subCategory.id &&
                    score.employeeId === emp.employeeId
            ) &&
            console.log(
                employeeScoreArr.find(
                    score =>
                        score.subCategoryId === subCategory.id &&
                        score.employeeId === emp.employeeId
                ).employeeScore
            );
        console.log("Hello");
        setEmployeeScore(
            employeeScoreArr.length > 0 &&
                employeeScoreArr.find(
                    score =>
                        score.subCategoryId === subCategory.id &&
                        score.employeeId === emp.employeeId
                )
                ? employeeScoreArr.find(
                      score =>
                          score.subCategoryId === subCategory.id &&
                          score.employeeId === emp.employeeId
                  ).employeeScore
                : 0
        );
    }, [employeeScoreArr]);

    useEffect(() => {
        setEmployeeScoreArr([...employeeScores]);
        console.log("Hello2");
    }, [employeeScores]);

    return (
        <div className={css.subCategoryScoreSelect}>
            <select
                onChange={e => {
                    handleEmployeeScoreChange(
                        e,
                        subCategory.id,
                        employeeScoreArr,
                        setEmployeeScoreArr,
                        emp.employeeId
                    );
                }}
                value={employeeScore}
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
    );
};

export default EmployeeScoreComponent;
