import React from "react";
import EmployeeList from "./Employeeslist";

const ManagerList = ({employees}) => {
    const managers = employees.filter((employee) =>
         employee.position === "Manager");
    return <EmployeeList employees={managers} heading="Manager"/>
};

export default ManagerList;