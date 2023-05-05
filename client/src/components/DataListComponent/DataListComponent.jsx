import React from "react";
import css from "./DataListComponent.css";
import cx from "classnames";

const DataListComponent = ({
    listType,
    data,
    selectedOptions,
    setSelectedOptions
}) => {
    return (
        <div>
            <div className={css.clientListDiv}>
                <h3>{listType === "client" ? "Clients" : "Teams"}</h3>
                <ul className={css.dataListUl}>
                    {data.map((entry, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setSelectedOptions(index)}
                                className={cx(css.dataListLi, {
                                    [css.selectedDataItem]:
                                        selectedOptions === index
                                })}
                            >
                                {listType === "client"
                                    ? entry.clientName
                                    : entry.teamName}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DataListComponent;
