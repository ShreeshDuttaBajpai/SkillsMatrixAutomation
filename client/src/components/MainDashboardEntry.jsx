import TablePage from "../Pages/TablePage";
import React from "react";
import InactivityLogout from "./InactivityLogout";

const MainDashboardEntry = () => {
    return (
        <InactivityLogout>
            <TablePage />
        </InactivityLogout>
    )
}
export default MainDashboardEntry