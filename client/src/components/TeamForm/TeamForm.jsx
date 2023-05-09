import React, { useState } from "react";
import css from "./TeamForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const TeamForm = ({ clients, postTeam, client }) => {
    const [team, setTeam] = useState({
        clientid: client.id,
        teamname: "",
        teamdescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const handlechange = e => {
        setTeam(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        console.log("hi");
    };
    console.log(client);

    // const postTeam = async () => {
    //     await TeamPostApi(team);
    // };
    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={() => postTeam(team)}
            >
                <label className={css.label}>Client Name</label>
                <input
                    className={css.form_input}
                    type="text"
                    defaultValue={client.clientName}
                ></input>
                <label className={css.label}>Team Name</label>
                <input
                    className={css.form_input}
                    id={"teamname"}
                    type="text"
                    onChange={e => handlechange(e)}
                    required
                ></input>
                <label className={css.label}>Team Description</label>
                <input
                    className={css.form_input}
                    id={"teamdescription"}
                    type="text"
                    onChange={e => handlechange(e)}
                    size="50"
                    required
                ></input>
            </form>
            <ButtonComponent
                cname={css.add_button}
                value={"Submit"}
                // handleClick={() => postTeam(team)}
            />
        </div>
    );
};

export default TeamForm;
