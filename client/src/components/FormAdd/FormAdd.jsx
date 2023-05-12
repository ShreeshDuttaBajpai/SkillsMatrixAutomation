import React, { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./FormAdd.css";
import { validationInput } from "../commonValidationFunction";
import { ClientPostApi } from "../../services/ClientService/ClientService";

const FormAdd = props => {
    const [client, setClient] = useState({
        clientname: "",
        clientdescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    // const [formError, setformError] = useState({});
    const handlechange = e => {
        setClient(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };

    console.log(client.clientname);
    const postClient = async state => {
        await ClientPostApi(state).then(() => {
            props.fetchClientList();
        });
    };
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={e => {
                    e.preventDefault();
                    var validation = validationInput(client, "client");
                    if (validation === true) {
                        postClient(client);
                        props.setclientFormVisible(!props.clientFormVisible);
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>Client Name</label>
                <input
                    className={css.form_input}
                    id={"clientname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                {/* <span>{formError.clientname}</span> */}
                <label className={css.label}>Client Description</label>
                <input
                    className={css.form_input}
                    id={"clientdescription"}
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

export default FormAdd;
