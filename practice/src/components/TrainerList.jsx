import React from "react";
import EmployeeList from "./Employeeslist";

const TrainerList = ({employees}) => {
    const trainers = employees.filter((employee)=>
    employee.position === "Trainer");
    return <EmployeeList employees={trainers} heading="Trainer" />;
};

export default TrainerList;