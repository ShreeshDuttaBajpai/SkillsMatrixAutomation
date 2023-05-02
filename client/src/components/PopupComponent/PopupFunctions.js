import { setNewData } from "../../redux/common/actions";

export const handleChangeticketDetails = (dispatch, value, ticketkey) => {
    const payload = { ticketkey: ticketkey, value: value };
    dispatch(setNewData(payload));
};
