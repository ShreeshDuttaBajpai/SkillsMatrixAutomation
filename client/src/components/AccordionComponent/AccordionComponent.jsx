import React from "react";
import css from "./AccordionComponent.css";
import cx from "classnames";
import { useState } from "react";
import AccordionCategoriesContainer from "../AccordionCategoriesComponent/AccordionCategoriesContainer";
import { useEffect } from "react";

const AccordionComponent = ({ selectedTeam, isAccordionDisabled }) => {
    const isDisabled = isAccordionDisabled || false;
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    useEffect(() => {
        setIsAccordionOpen(selectedTeam && selectedTeam.length > 0);
    }, [selectedTeam]);
    return (
        <div className={cx(css.accordionDiv, css.categoryBox)}>
            <div
                className={cx(css.accordionTitleContainer, {
                    [css.btnDisabled]: isDisabled
                })}
            >
                <div className={css.categoryTitleDiv}>Categories</div>
                <div className={css.subHeadingContainer}>
                    <div className={css.subCategoryTitleDiv}>
                        Sub-categories
                    </div>
                    <div className={css.clientExpectedDiv}>
                        Client Expected Score
                    </div>
                </div>
            </div>
            <div
                className={cx(css.accordionBody, {
                    [css.accordionActiveBody]: isAccordionOpen,
                    [css.accordionDisabled]: isDisabled
                })}
            >
                <AccordionCategoriesContainer />
            </div>
        </div>
    );
};

export default AccordionComponent;
