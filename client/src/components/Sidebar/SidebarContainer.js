import { connect } from "react-redux";
import SidebarComponent from "./SidebarComponent";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
    return {};
};

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarComponent);
export default SidebarContainer;
