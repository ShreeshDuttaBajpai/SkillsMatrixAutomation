import React, { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import css from "./FormAdd.css";
import { ClientPostApi } from "../../services/ClientService/ClientService";

const FormAdd = () => {
    const [client, setClient] = useState({
        clientname: "",
        clientdescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const handlechange = e => {
        setClient(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    const postClient = async () => {
        await ClientPostApi(client);
    };
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={e => {
                    e.preventDefault();
                    postClient();
                }}
            >
                <label className={css.label}>Client Name</label>
                <input
                    required
                    className={css.form_input}
                    id={"clientname"}
                    type="text"
                    onChange={e => handlechange(e)}
                ></input>
                <label className={css.label}>Client Description</label>
                <input
                    required
                    className={css.form_input}
                    id={"clientdescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                ></input>
                <div>
                    <ButtonComponent
                        cname={css.add_button}
                        value={"Submit"}
                        // handleClick={postClient}
                    />
                </div>
            </form>
        </div>
    );
};

export default FormAdd;
