import React, { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./CategoryForm.css";
import { validationInput } from "../commonValidationFunction";
import { CategoryPostApi } from "../../services/CategoryService/CategoryService";

const CategoryForm = props => {
    const [category, setCategory] = useState({
        categoryfunction: "",
        categoryname: "",
        categorydescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const [errorMessage, setErrorMesaage] = useState([]);
    const handlechange = e => {
        setCategory(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        // console.log("hi");
    };
    const postCategory = async state => {
        await CategoryPostApi(state).then(() => {
            props.fetchCategoriesList();
        });
    };

    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={e => {
                    e.preventDefault();
                    var validation = validationInput(category, "category");
                    setErrorMesaage(validation);
                    if (validation.length === 0) {
                        postCategory(category);
                        props.setcategoryFormVisible(
                            !props.categoryFormVisible
                        );
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>Category Function</label>
                <input
                    className={css.form_input}
                    id={"categoryfunction"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                {errorMessage.map(
                    item =>
                        item.field === "function" && (
                            <div className={css.error_messages}>
                                <span>{item.error}</span>
                            </div>
                        )
                )}
                <label className={css.label}>Category Name</label>
                <input
                    className={css.form_input}
                    id={"categoryname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                {errorMessage.map(
                    item =>
                        item.field === "name" && (
                            <div className={css.error_messages}>
                                <span>{item.error}</span>
                            </div>
                        )
                )}
                <label className={css.label}>Category Description</label>
                <input
                    className={css.form_input}
                    id={"categorydescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
                {errorMessage.map(
                    item =>
                        item.field === "description" && (
                            <div className={css.error_messages}>
                                <span>{item.error}</span>
                            </div>
                        )
                )}
                <div>
                    <ButtonComponent cname={css.add_button} value={"Submit"} />
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;
