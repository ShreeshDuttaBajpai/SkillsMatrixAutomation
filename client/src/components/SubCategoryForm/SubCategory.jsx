import React, { useState } from "react";
import css from "./SubCategoryForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const SubCategory = ({ categoryItem, postSubCat, client }) => {
    const [subcat, setSubCat] = useState({
        categoryid: client.id,
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

    return (
        <div>
            <form className={css.form_container}>
                <label className={css.label}>SubCategory Name</label>
                <input
                    className={css.form_input}
                    type="text"
                    defaultValue={client.clientName}
                ></input>
                <label className={css.label}>SubCategory Name</label>
                <input
                    className={css.form_input}
                    id={"subcategoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                <label className={css.label}>SubCategory Description</label>
                <input
                    className={css.form_input}
                    id={"subcategorydescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
            </form>
            <ButtonComponent
                cname={css.add_button}
                value={"Submit"}
                handleClick={() => postSubCat(subcat)}
            />
        </div>
    );
};

export default SubCategory;
