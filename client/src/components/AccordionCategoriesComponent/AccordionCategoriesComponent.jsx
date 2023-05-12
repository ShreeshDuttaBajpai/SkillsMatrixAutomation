import React, { useEffect, useState } from "react";
import css from "./AccordionCategoriesComponent.css";
import {
    getScoreForSubCategoryId,
    handleExpectedScoreChange
} from "./AccordionCategoriesFunctions";
import SubCategoryExpectedScoreContainer from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreContainer";
import cx from "classnames";

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
    return subCategories.length > 0
        ? categories.map((category, index) => {
              return (
                  <div
                      key={category.id}
                      className={cx(css.categoryListItem, {
                          [css.removeBorderBottom]:
                              index + 1 === categories.length
                      })}
                  >
                      <div className={css.categoryDiv}>
                          {category.categoryName}
                      </div>
                      {subCategories.length > 0 && (
                          <div className={css.subCategoriesListContainer}>
                              {subCategories
                                  .filter(
                                      subCategory =>
                                          subCategory.categoryId === category.id
                                  )
                                  .map(subCategory => (
                                      <SubCategoryExpectedScoreContainer
                                          expectedScoreObj={
                                              expectedScoreMappings.length >
                                                  0 &&
                                              expectedScoreMappings.find(
                                                  score =>
                                                      score.subCategoryId ===
                                                      subCategory.id
                                              )
                                                  ? expectedScoreMappings.find(
                                                        score =>
                                                            score.subCategoryId ===
                                                            subCategory.id
                                                    ).expectedClientScore
                                                  : 0
                                          }
                                          subCategory={subCategory}
                                          key={subCategory.id}
                                      />
                                  ))}
                          </div>
                      )}
                  </div>
              );
          })
        : "Loading";
};

export default AccordionCategoriesComponent;
