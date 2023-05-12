import React, { useState } from "react";
import css from "./EmpForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { getEmployeeList } from "../CardsComponent/CardsComponentFunction";
import { validationInput } from "../commonValidationFunction";

const EmpForm = props => {
    const [employee, setEmp] = useState({
        employeeId: 0,
        teamId: props.empItem.id,
        employeeName: ""
    });
    const [errorMessage, setErrorMessage] = useState([]);
    const handlechange = e => {
        setEmp(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    //console.log(empItem);

    // const postTeam = async () => {
    //     await TeamPostApi(team);
    // };
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={async e => {
                    e.preventDefault();
                    var validate = validationInput(employee, "employee");
                    setErrorMessage(validate);
                    if (validate.length === 0) {
                        await props.postEmp(employee).then(async () => {
                            props.setEmployees(
                                await getEmployeeList(employee.teamId)
                            );
                        });

                        props.setaddEmployeeFormVisible(
                            !props.addEmployeeFormVisible
                        );
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>
                    Team Name - {props.empItem.teamName}
                </label>
                {/* <input
                    className={css.form_input}
                    type="text"
                    defaultValue={client.clientName}
                ></input> */}
                <label className={css.label}>Employee Name</label>
                <input
                    className={css.form_input}
                    id={"employeeName"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                {errorMessage.map(
                    (item, index) =>
                        item.field === "Name" && (
                            <div className={css.error_messages} key={index}>
                                <span>{item.error}</span>
                            </div>
                        )
                )}
                <label className={css.label}>Employee Id</label>
                <input
                    className={css.form_input}
                    id={"employeeId"}
                    type="number"
                    onChange={e => handlechange(e)}
                ></input>
                {errorMessage.map(
                    (item, index) =>
                        item.field === "Id" && (
                            <div className={css.error_messages} key={index}>
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

export default EmpForm;
