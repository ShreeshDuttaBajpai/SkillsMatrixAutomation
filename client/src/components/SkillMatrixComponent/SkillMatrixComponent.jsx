import React from "react";
import css from "./SkillMatrixComponent.css";
import cx from "classnames";

const SkillMatrixComponent = ({ skillMatrixData }) => {
    return (
        <div className={css.skillMatrixPageContainer}>
            <h3>Skill Matrix Table</h3>
            <div className={css.skillMatrixGridContainer}>
                <div className={css.skillMatrixGridHeader}>
                    <div className={css.skillMatrixGridItem}>Client</div>
                    <div className={css.skillMatrixGridItem}>Team</div>
                    <div className={css.skillMatrixGridItem}>Employee ID</div>
                    <div className={css.skillMatrixGridItem}>Employee Name</div>
                    <div className={css.skillMatrixGridItem}>Category</div>
                    <div className={css.skillMatrixGridItem}>Sub-Category</div>
                    <div className={css.skillMatrixGridItem}>
                        Expected Score
                    </div>
                    <div
                        className={cx(
                            css.skillMatrixGridItem,
                            css.removeBorderRight
                        )}
                    >
                        Employee Score
                    </div>
                </div>
                <div className={css.skillMatrixGridBody}>
                    {skillMatrixData.length > 0 &&
                        skillMatrixData.map((matrixRow, index) => {
                            return (
                                <div
                                    className={cx(css.skillMatrixGridRow, {
                                        // [css.removeBorder]:
                                        //     index + 1 === skillMatrixData.length
                                    })}
                                    key={index}
                                >
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.client}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.team}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.employeeId}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.employeeName}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.category}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.subCategory}
                                    </div>
                                    <div className={css.skillMatrixGridItem}>
                                        {matrixRow.expectedScore}
                                    </div>
                                    <div
                                        className={cx(
                                            css.skillMatrixGridItem,
                                            css.removeBorderRight
                                        )}
                                    >
                                        {matrixRow.employeeScore}
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
