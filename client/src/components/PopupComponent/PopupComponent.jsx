import React, { useEffect } from "react";
import css from "../PopupComponent/PopupComponent.css";
import x from "../../assests/x.png";

const PopupComponent = ({ client }) => {
    return (
        <div className={css.popupContainerDiv}>
            <div className={css.popupBodyDiv}>{client.clientName}</div>
        </div>
    );
};

export default PopupComponent;
