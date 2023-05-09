import React, { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./CategoryForm.css";
import { CategoryPostApi } from "../../services/CategoryService/CategoryService";

const CategoryForm = () => {
    const [category, setCategory] = useState({
        categoryname: "",
        categorydescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const handlechange = e => {
        setCategory(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    const postCategory = async () => {
        await CategoryPostApi(category);
    };
    return (
        <div>
            <form className={css.form_container} onSubmit={() => postCategory}>
                <label className={css.label}>Category Name</label>
                <input
                    className={css.form_input}
                    id={"categoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                    required
                ></input>
                <label className={css.label}>Category Description</label>
                <input
                    className={css.form_input}
                    id={"categorydescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                    required
                ></input>
                <br />
                <ButtonComponent
                    cname={css.add_button}
                    value={"Submit"}
                    //handleClick={postCategory}
                />
            </form>
        </div>
    );
};

export default CategoryForm;
