import React from "react";
import css from "./AccordionComponent.css";
import cx from "classnames";
import { useState } from "react";
import {
    isAccordionEventDisabled,
    toggleAccordionOpen
} from "./AccordionFunctions";
import AccordionCategoriesContainer from "../AccordionCategoriesComponent/AccordionCategoriesContainer";
import {
    faChevronDown,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordionComponent = ({
    accordionTitle,
    accordionData,
    selectedItem,
    setSelectedItem,
    isAnyAccordionOpen,
    setIsAnyAccordionOpen
}) => {
    const isDisabled = accordionTitle === "Teams" && accordionData.length === 0;
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    return (
        <div
            className={cx(css.accordionDiv, {
                [css.categoryBox]: accordionTitle === "Categories"
            })}
        >
            <div
                className={cx(css.accordionContainer, {
                    [css.btnDisabled]: isDisabled,
                    [css.disableAccordionEvent]: isAccordionEventDisabled(
                        isAnyAccordionOpen,
                        isAccordionOpen
                    )
                })}
                onClick={() =>
                    toggleAccordionOpen(
                        isAnyAccordionOpen,
                        setIsAnyAccordionOpen,
                        isAccordionOpen,
                        setIsAccordionOpen
                    )
                }
            >
                {isAccordionOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                    <FontAwesomeIcon icon={faChevronRight} />
                )}
                <span className={css.accordionTitleSpan}>{accordionTitle}</span>
                <span>
                    {accordionTitle !== "Categories" &&
                        (selectedItem
                            ? accordionTitle === "Clients"
                                ? accordionData.find(
                                      entry => entry.id === selectedItem
                                  ).clientName
                                : accordionData.find(
                                      entry => entry.id === selectedItem
                                  ).teamName
                            : "None selected")}
                </span>
            </div>
            <div
                className={cx(css.accordionBody, {
                    [css.accordionActiveBody]: isAccordionOpen
                })}
            >
                {accordionData.length > 0 &&
                    (accordionTitle !== "Categories" ? (
                        <ul className={css.dataListUl}>
                            {accordionData.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedItem(item.id);
                                        toggleAccordionOpen(
                                            isAnyAccordionOpen,
                                            setIsAnyAccordionOpen,
                                            isAccordionOpen,
                                            setIsAccordionOpen
                                        );
                                    }}
                                    className={cx(css.dataListLi, {
                                        [css.selectedDataItem]:
                                            selectedItem === item.id
                                    })}
                                >
                                    {accordionTitle === "Clients"
                                        ? item.clientName
                                        : item.teamName}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <AccordionCategoriesContainer />
                    ))}
            </div>
        </div>
    );
};

export default AccordionComponent;
