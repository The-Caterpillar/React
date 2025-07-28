import React from "react";

const EmployeeList = ({employees,heading}) => {
    return (
        <div>
            <h2>{heading}</h2>
            {employees.length === 0 ? (
                <p> No employees available </p>
                ) : (
                    <ul>
                        {employees.map((employee,index) => (
                            <li key={index}>
                                <strong>{employee.name}</strong> - 
                                {employee.position}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default EmployeeList;