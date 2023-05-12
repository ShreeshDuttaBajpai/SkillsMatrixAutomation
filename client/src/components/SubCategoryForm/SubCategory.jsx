import React, { useState } from "react";
import css from "./SubCategoryForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { validationInput } from "../commonValidationFunction";
import { getSubCategoryList } from "../CardsComponent/CardsComponentFunction";

const SubCategory = props => {
    const [subCategory, setSubCategory] = useState({
        categoryid: props.categoryItem.id,
        subcategoryname: "",
        subcategorydescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    console.log(subCategory);
    const handlechange = e => {
        setSubCategory(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={async e => {
                    e.preventDefault();
                    var validate = validationInput(subCategory, "subcategory");
                    if (validate === true) {
                        await props
                            .postSubCategory(subCategory)
                            .then(async () => {
                                props.setSubCategories(
                                    await getSubCategoryList(
                                        subCategory.categoryid
                                    )
                                );
                            });
                        props.setaddSubCategoryFormVisible(
                            !props.addSubCategoryFormVisible
                        );
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>
                    Category Name - {props.categoryItem.categoryName}
                </label>
                <label className={css.label}>SubCategory Name</label>
                <input
                    className={css.form_input}
                    id={"subcategoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                    // defaultValue={client.clientName}
                ></input>
                <label className={css.label}>SubCategory Description</label>
                <input
                    className={css.form_input}
                    id={"subcategorydescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                    required
                ></input>
                <div>
                    <ButtonComponent cname={css.add_button} value={"Submit"} />
                </div>
            </form>
        </div>
    );
};

export default SubCategory;
