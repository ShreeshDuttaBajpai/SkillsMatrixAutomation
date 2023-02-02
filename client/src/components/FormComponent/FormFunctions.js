import { openToggle } from "../../redux/common/actions";

export const handleOpen = () => {
    dispatch(openToggle(!open));
};