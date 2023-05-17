import React from "react";
import css from "./SkillMatrixComponent.css";
import cx from "classnames";
import { useEffect } from "react";

const SkillMatrixComponent = ({
    skillMatrixData,
    fetchSkillMatrixTable,
    fetchCategoriesList,
    categories,
    subCategories,
    fetchSubCategoriesList,
    employee
}) => {
    useEffect(() => {
        fetchSkillMatrixTable();
    }, [fetchSkillMatrixTable]);
    useEffect(() => {
        fetchSubCategoriesList();
    }, [fetchSubCategoriesList]);
    // useEffect(() => {
    //     fetchCategoriesList();
    // }, fetchCategoriesList);
    console.log(categories);
    console.log(subCategories);
    console.log(skillMatrixData);
    return (
        <div className={css.skillMatrixPageContainer}>
            <div className={css.skillMatrixGridContainer}>
                <div className={css.skillMatrixGridHeader}>
                    <div className={css.skillMatrixGridHeadingItem}>
                        Category
                    </div>
                    <div className={css.skillMatrixGridHeadingItem}>
                        Client Expected Score
                    </div>
                    {employee &&
                        employee.map(emp => {
                            return (
                                <div className={css.skillMatrixGridHeadingItem}>
                                    {emp.employeeName}
                                </div>
                            );
                        })}
                </div>
                <div className={css.skillMatrixGridBody}>
                    {skillMatrixData.length > 0 &&
                        categories.map((category, index) => {
                            return (
                                <div
                                    className={cx(css.skillMatrixGridRow, {
                                        // [css.removeBorder]:
                                        //     index + 1 === skillMatrixData.length
                                    })}
                                    key={index}
                                >
                                    <div className={css.skillMatrixGridItem}>
                                        <h5 className={css.categoryname}>
                                            {category.categoryName}
                                        </h5>
                                        {subCategories
                                            .filter(
                                                subCategory =>
                                                    subCategory.categoryId ===
                                                    category.id
                                            )
                                            .map(subCategory => (
                                                <div
                                                    className={
                                                        css.subcategoryname
                                                    }
                                                >
                                                    {
                                                        subCategory.subCategoryName
                                                    }
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default SkillMatrixComponent;
