import React from "react";
import { categories, subCategories } from "../../Data/DataList";
import css from "./Categories.css";
import cx from "classnames";

const CategoryComponent = () => {
    console.log(categories);
    return (
        <div>
            <h3>Categories</h3>
            <div>
                <ul className={css.ulStyles}>
                    {categories.map((category, index) => {
                        return (
                            <li key={index}>
                                {category.categoryName}
                                <input type="checkbox" />
                                {subCategories && (
                                    <ul
                                        className={cx(
                                            css.ulStyles,
                                            css.subCategoryUl
                                        )}
                                    >
                                        {subCategories.map((subCategory, i) => (
                                            <li key={i}>
                                                {subCategory.subCategoryName}
                                                <input type="checkbox" />
                                                <input type="text" />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default CategoryComponent;
