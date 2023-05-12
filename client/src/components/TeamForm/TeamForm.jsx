import React, { useState } from "react";
import css from "./TeamForm.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { validationInput } from "../commonValidationFunction";
import { getClientsTeamsList } from "../CardsComponent/CardsComponentFunction";

const TeamForm = props => {
    const [team, setTeam] = useState({
        clientid: props.client.id,
        teamname: "",
        teamdescription: "",
        createdOn: new Date().toJSON(),
        modifiedOn: new Date().toJSON()
    });
    const [errorMessage, setErrorMessage] = useState([]);
    const handlechange = e => {
        setTeam(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
    };

    return (
        <div>
            <form
                className={css.form_container}
                onSubmit={async e => {
                    e.preventDefault();
                    var validate = validationInput(team, "team");
                    setErrorMessage(validate);
                    if (validate.length === 0) {
                        await props.postTeam(team).then(async () => {
                            props.setTeams(
                                await getClientsTeamsList(team.clientid)
                            );
                        });
                        props.setaddTeamFormVisible(!props.addTeamFormVisible);
                        props.setShowDrawer(!props.showDrawer);
                    }
                }}
            >
                <label className={css.label}>
                    Client Name - {props.client.clientName}
                </label>
                {/* <input
                    className={css.form_input}
                    type="text"
                    defaultValue={client.clientName}
                ></input> */}
                <label className={css.label}>Team Name</label>
                <input
                    className={css.form_input}
                    id={"teamname"}
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
                <label className={css.label}>Team Description</label>
                <input
                    className={css.form_input}
                    id={"teamdescription"}
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

export default TeamForm;
