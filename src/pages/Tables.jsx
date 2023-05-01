import Table from "../components/Table/Table.jsx";
import {generateColumns} from "../utils.js";
import DataTable from "react-data-table-component";

const Tables = () => {

    const _employees = [
        {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: 33,
            start_date: "2008/11/28",
            salary: "$162,700",
        },
        {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: 47,
            start_date: "2009/10/09",
            salary: "$1,200,000",
        },
        {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: 66,
            start_date: "2009/01/12",
            salary: "$86,000",
        },
        {
            name: "Bradley Greer",
            position: "Software Engineer",
            office: "London",
            age: 41,
            start_date: "2012/10/13",
            salary: "$132,000",
        },
        {
            name: "Brenden Wagner",
            position: "Software Engineer",
            office: "San Francisco",
            age: 28,
            start_date: "2011/06/07",
            salary: "$206,850",
        },
        {
            name: "Brielle Williamson",
            position: "Integration Specialist",
            office: "New York",
            age: 61,
            start_date: "2012/12/02",
            salary: "$372,000",
        },
        {
            name: "Bruno Nash",
            position: "Software Engineer",
            office: "London",
            age: 38,
            start_date: "2011/05/03",
            salary: "$163,500",
        },
        {
            name: "Caesar Vance",
            position: "Pre-Sales Support",
            office: "New York",
            age: 21,
            start_date: "2011/12/12",
            salary: "$106,450",
        },
        {
            name: "Cara Stevens",
            position: "Sales Assistant",
            office: "New York",
            age: 46,
            start_date: "2011/12/06",
            salary: "$145,600",
        },
        {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: 22,
            start_date: "2012/03/29",
            salary: "$433,060",
        },
    ];

    const employees = _employees.map(employee => {
        return {
            ...employee,
            Edit: <span>Edit {employee.name}</span>,
            Delete: <span>Delete {employee.position}</span>
        }
    });


    const columns = generateColumns(employees[0]);
    console.log(columns)

    return <>
        <div className="card shadow">
            <div className="card-header"></div>
            <div className="card-body">
                <DataTable title="Employees" columns={columns} data={employees} selectableRows/>
            </div>
        </div>
    </>;
}

export default Tables;