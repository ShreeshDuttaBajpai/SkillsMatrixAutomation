import React, { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./FormAdd.css";

const FormAdd = () => {
    const [client, setClient] = useState({
        clientname: "",
        clientdesc: ""
    });
    const handlechange = e => {
        setClient(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    return (
        <div>
            <form className={css.form_container}>
                <label className={css.label}>Client Name</label>
                <input
                    className={css.form_input}
                    id={"clientname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                <label className={css.label}>Client Description</label>
                <input
                    className={css.form_input}
                    id={"clientdesc"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
            </form>
            <ButtonComponent cname={css.add_button} value={"Submit"} />
        </div>
    );
};

export default FormAdd;
