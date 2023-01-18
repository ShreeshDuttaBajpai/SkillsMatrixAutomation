import TablePage from "../Pages/TablePage";
import React from "react";
import InactivityLogout from "./InactivityLogout";
import CodeReview from "../Pages/CodeReview";
import ReportsPage from "../Pages/ReportsPage";

const MainDashboardEntry = () => {
    return (
      <InactivityLogout>
        <TablePage />
      </InactivityLogout>
    );
}
export default MainDashboardEntry