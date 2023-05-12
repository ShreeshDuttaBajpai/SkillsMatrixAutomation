import React, { useEffect, useState } from "react";
import css from "./SubCategoryExpectedScoreComponent.css";
import { handleExpectedScoreChange } from "./SubCategoryExpectedScoreFunctions";

const SubCategoryExpectedScoreComponent = ({
    subCategory,
    expectedScoreMappings,
    setExpectedScoreMappings,
    expectedScoreObj
}) => {
    const [subCategoryScore, setSubCategoryScore] = useState(expectedScoreObj);
    useEffect(() => {
        setSubCategoryScore(expectedScoreObj);
    }, [expectedScoreObj]);
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
        </div>
    );
};

export default SubCategoryExpectedScoreComponent;
