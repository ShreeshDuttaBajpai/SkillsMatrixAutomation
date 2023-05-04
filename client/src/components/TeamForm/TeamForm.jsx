import React, { useState } from "react";
import css from "./TeamForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const TeamForm = () => {
    const [team, setTeam] = useState({
        teamname: "",
        teamdesc: ""
    });
    const handlechange = e => {
        setTeam(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    return (
        <div>
            <form className={css.form_container}>
                <label className={css.label}>Team Name</label>
                <input
                    className={css.form_input}
                    id={"teamname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                <label className={css.label}>Team Description</label>
                <input
                    className={css.form_input}
                    id={"teamdesc"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
            </form>
            <ButtonComponent cname={css.add_button} value={"Submit"} />
        </div>
    );
};

export default TeamForm;
