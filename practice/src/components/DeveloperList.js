import React from "react";
import EmployeeList from "./Employeeslist";

const DeveloperList = ({employees}) => {
    const Developers = employees.filter(
        (employee)=>employee.position ==="Developer"
    );
    return <EmployeeList employees={Developers} heading="Developer"/>;
};

export default DeveloperList;