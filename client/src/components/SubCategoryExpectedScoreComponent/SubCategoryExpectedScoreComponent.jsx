import React, { useState } from "react";
import css from "./SubCategoryExpectedScoreComponent.css";
import {
    getScoreForSubCategoryId,
    handleExpectedScoreChange
} from "./SubCategoryExpectedScoreFunctions";

const SubCategoryExpectedScoreComponent = ({
    subCategory,
    expectedScoreMappings,
    setExpectedScoreMappings,
    expectedScoreObj
}) => {
    console.log(expectedScoreObj);
    console.log(expectedScoreMappings);
    const [subCategoryScore, setSubCategoryScore] = useState(
        expectedScoreObj !== undefined
            ? expectedScoreObj.expectedClientScore
            : 0
    );
    console.log(subCategoryScore);
    console.log(
        getScoreForSubCategoryId(expectedScoreMappings, subCategory.id)
    );
    return (
        <li key={subCategory.id} className={css.subCategoryLi}>
            {subCategory.subCategoryName}
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
        </li>
    );
};

export default SubCategoryExpectedScoreComponent;
