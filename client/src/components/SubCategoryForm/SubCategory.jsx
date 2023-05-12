import React, { useState } from "react";
import css from "./SubCategoryForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { validationInput } from "../commonValidationFunction";

const SubCategory = props => {
    const [subCategory, setSubCategory] = useState({
        categoryid: props.client.id,
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
                onSubmit={e => {
                    e.preventDefault();
                    var validate = validationInput(subCategory, "subcategory");
                    if (validate === true) {
                        props.postSubCategory(subCategory);
                        props.setaddSubCategoryFormVisible(
                            !props.addSubCategoryFormVisible
                        );
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>SubCategory Name</label>
                <input
                    className={css.form_input}
                    id={"subcategoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                    defaultValue={props.client.clientName}
                ></input>
                <label className={css.label}>SubCategory Description</label>
                <input
                    className={css.form_input}
                    id={"subcategorydescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
                <div>
                    <ButtonComponent cname={css.add_button} value={"Submit"} />
                </div>
            </form>
        </div>
    );
};

export default SubCategory;
