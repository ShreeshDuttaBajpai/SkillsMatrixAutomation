import React, { useEffect, useState } from "react";
import css from "./AccordionCategoriesComponent.css";
import { handleExpectedScoreChange } from "./AccordionCategoriesFunctions";

const AccordionCategoriesComponent = ({
    categories,
    subCategories,
    expectedScoreMappings,
    fetchSubCategoriesList,
    setExpectedScoreMappings
}) => {
    useEffect(() => {
        fetchSubCategoriesList();
    }, [fetchSubCategoriesList]);
    return subCategories.length > 0 ? (
        <ul className={css.categoriesListUl}>
            {categories.map(category => (
                <li key={category.id} className={css.categoryListLi}>
                    {category.categoryName}
                    {subCategories.length > 0 && (
                        <ul className={css.subCategoriesListUl}>
                            {subCategories
                                .filter(
                                    subCategory =>
                                        subCategory.categoryId === category.id
                                )
                                .map(subCategory => (
                                    <li
                                        key={subCategory.id}
                                        className={css.subCategoryLi}
                                    >
                                        {subCategory.subCategoryName}
                                        <select
                                            onChange={e =>
                                                handleExpectedScoreChange(
                                                    e,
                                                    subCategory.id,
                                                    expectedScoreMappings,
                                                    setExpectedScoreMappings
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
                                ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    ) : (
        "Loading"
    );
};

export default AccordionCategoriesComponent;
