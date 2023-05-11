import React, { useState } from "react";
import css from "./EmpForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const EmpForm = ({ empItem, postEmp }) => {
    const [emp, setEmp] = useState({
        employeeId: 0,
        teamId: empItem.id,
        employeeName: ""
    });
    const handlechange = e => {
        setEmp(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    console.log(empItem);

    // const postTeam = async () => {
    //     await TeamPostApi(team);
    // };
    return (
        <div>
            <form className={css.form_container}>
                <label className={css.label}>
                    Team Name - {empItem.teamName}
                </label>
                {/* <input
                    className={css.form_input}
                    type="text"
                    defaultValue={client.clientName}
                ></input> */}
                <label className={css.label}>Employee Name</label>
                <input
                    required
                    className={css.form_input}
                    id={"employeeName"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                <label className={css.label}>Employee Id</label>
                <input
                    required
                    className={css.form_input}
                    id={"employeeId"}
                    type="number"
                    onChange={e => handlechange(e)}
                ></input>
            </form>
            <ButtonComponent
                cname={css.add_button}
                value={"Submit"}
                handleClick={() => postEmp(emp)}
            />
        </div>
    );
};

export default EmpForm;
