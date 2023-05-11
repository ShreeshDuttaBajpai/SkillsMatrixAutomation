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

    // var nameOfClient = document.getElementById("clientname");
    // console.log(nameOfClient);
    // var descripionOfClient = document.getElementById("clientdescription");
    // console.log(descripionOfClient);

    // var regex = /^[ A-Za-z0-9_-]*$/;
    // console.log(regex);

    // const onBlurValidateFormat = e => {
    //     const value = e.target.value;
    //     const regex = /([a-zA-Z]{4})+-([0-9]{3})+([a-zA-Z]{2})+$/g;
    //     if (!value.match(regex)) {
    //         //Show an error message or put a warning text under the input and set flag to prevent form submit
    //     }
    // };

    const onChangeAlphaNumericInput = e => {
        const value = e.target.value;
        console.log(value);
        const regex = /^[0-9a-zA-Z(\-)]+$/; //this will admit letters, numbers and dashes
        if (value.match(regex)) {
            handlechange(e);
            // console.log(value);
            //this.setState({ inputValue: value });
        } else {
            alert("Enter Alphanumeric text only!!!");
        }
    };

    return (
        <div>
            <form className={css.form_container} onSubmit={() => postClient}>
                <label className={css.label}>Client Name</label>
                <input
                    required
                    className={css.form_input}
                    id={"clientname"}
                    type="text"
                    onChange={e => onChangeAlphaNumericInput(e)}
                ></input>

                <label className={css.label}>Client Description</label>
                <input
                    required
                    className={css.form_input}
                    id={"clientdescription"}
                    type="text"
                    onChange={e => onChangeAlphaNumericInput(e)}
                    size="50"
                ></input>
                <br />
                <ButtonComponent
                    cname={css.add_button}
                    value={"Submit"}
                    //handleClick={postClient}
                />
            </form>
        </div>
    );
};

export default FormAdd;
