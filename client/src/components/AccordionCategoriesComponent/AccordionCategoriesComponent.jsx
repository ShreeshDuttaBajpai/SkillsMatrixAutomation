import React, { useEffect } from "react";
import css from "./AccordionCategoriesComponent.css";
import SubCategoryExpectedScoreContainer from "../SubCategoryExpectedScoreComponent/SubCategoryExpectedScoreContainer";
import cx from "classnames";
import EmployeeScoreContainer from "../EmployeeScoreComponent/EmployeeScoreContainer";

const AccordionCategoriesComponent = ({
    categories,
    subCategories,
    fetchSubCategoriesList,
    employee
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
                      {employee ? (
                          <>
                              <div className={css.subCategoriesListContainer}>
                                  {subCategories
                                      .filter(
                                          subCategory =>
                                              subCategory.categoryId ===
                                              category.id
                                      )
                                      .map(subCategory => (
                                          <EmployeeScoreContainer
                                              subCategory={subCategory}
                                              key={subCategory.id}
                                              employee={employee}
                                          />
                                      ))}
                              </div>
                          </>
                      ) : (
                          <div className={css.subCategoriesListContainer}>
                              {subCategories
                                  .filter(
                                      subCategory =>
                                          subCategory.categoryId === category.id
                                  )
                                  .map(subCategory => (
                                      <SubCategoryExpectedScoreContainer
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
