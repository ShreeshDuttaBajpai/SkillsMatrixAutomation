import { connect } from 'react-redux';
import PopupComponent from './PopupComponent';
import { handleChangeticketDetails } from './PopupFunctions';

const mapStateToProps = state => ({
    ticketDetails: state.authUser.ticketDetails
});

const mapDispatchToProps = dispatch => (
    {
        handleChangeTicketDetails :(value, ticketkey) => handleChangeticketDetails(dispatch, value, ticketkey)
    }
)

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(PopupComponent);
export default PopupContainer;