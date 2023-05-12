import React, { useEffect } from "react";
import css from "./SkillMatrixTable.css";

const SkillMatrixTable = ({
    fetchCategoryList,
    categories,
    fetchSubCategoryList,
    subCategories
}) => {
    useEffect(() => {
        fetchCategoryList;
    }, [fetchCategoryList]);

    return (
        <div>
            {" "}
            <table className={css.skilltable}>
                <thead>
                    <tr>
                        <th rowspan="2">Category</th>
                        <th rowspan="2">Sub Category</th>
                        <th colspan="3">Employees</th>
                    </tr>
                    <tr>
                        <th>emp1</th>
                        <th>emp2</th>
                        <th>emp3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3">Category 1</td>
                        <td>Subcategory 1.1</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.1 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 1.2</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.2 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.2 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.2 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 1.3</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 1.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 1.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 1.3 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2">Category 2</td>
                        <td>Subcategory 2.1</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 2.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 2.1 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 2.1 --> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Subcategory 2.3</td>
                        <td>
                            <select>
                                {/* <!-- options for emp1 in subcategory 2.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp2 in subcategory 2.3 --> */}
                            </select>
                        </td>
                        <td>
                            <select>
                                {/* <!-- options for emp3 in subcategory 2.3 --> */}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SkillMatrixTable;
