import React, { useEffect, useState } from "react";
import css from "./AccordionCategoriesComponent.css";
import {
    getScoreForSubCategoryId,
    handleExpectedScoreChange
} from "./AccordionCategoriesFunctions";
import SubCategoryExpectedScoreContainer from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreContainer";

const AccordionCategoriesComponent = ({
    categories,
    subCategories,
    expectedScoreMappings,
    fetchSubCategoriesList,
    setExpectedScoreMappings
}) => {
    console.log(expectedScoreMappings);
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
                                    <SubCategoryExpectedScoreContainer
                                        expectedScoreObj={
                                            expectedScoreMappings.length > 0
                                                ? expectedScoreMappings.find(
                                                      score =>
                                                          score.subCategoryId ===
                                                          subCategory.id
                                                  )
                                                : 0
                                        }
                                        subCategory={subCategory}
                                        key={subCategory.id}
                                    />
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
