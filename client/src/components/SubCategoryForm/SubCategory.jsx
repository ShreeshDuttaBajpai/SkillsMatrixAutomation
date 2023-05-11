import React, { useState } from "react";
import css from "./SubCategoryForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const SubCategory = ({ categoryItem, postSubCat }) => {
    const [subcat, setSubCat] = useState({
        categoryid: categoryItem.id,
        subcategoryname: "",
        subcategorydescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const handlechange = e => {
        setSubCat(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    console.log(categoryItem.subCategoryName);
    console.log(categoryItem);
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={() => postSubCat(subcat)}
            >
                <label className={css.label}>
                    Category Name - {categoryItem.categoryName}
                </label>
                <label className={css.label}>SubCategory Name</label>
                <input
                    className={css.form_input}
                    id={"subcategoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                    required
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
                <br />
                <ButtonComponent
                    cname={css.add_button}
                    value={"Submit"}
                    //handleClick={() => postSubCat(subcat)}
                />
            </form>
        </div>
    );
};

export default SubCategory;
