import React from "react";
import AddPerson from "./AddPerson";

export default function Person({ data, onSearch, onSortByName, onSortBySalary, addUser }) {
    return (
        <div>
            <h2>This is list user</h2>
            <input type="text" onChange={(e) => onSearch(e.target.value)} />
            <button type="button" onClick={() => onSortByName()}>Sort By Name</button>
            <button type="button" onClick={() => onSortBySalary()}>Sort By Salary</button>
            <button type="button" onClick={() => addUser()}>Add User</button>
            <div id = "addUserPanel" style={{display : 'none'}}>
                <div>Add Person</div>
                <form>
                    First Name: <input id="fnameId" />
                    Last Name: <input id="lnameId" />
                    Email: <input id="mailId" />
                    Gender: <input id="genderId" />
                    Age: <input id="ageId" />
                    Salary: <input id="salaryId" />
                    <input type={button} value = "Submit"/>
                </form>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(

                            ({ id, first_name, last_name, email, gender, age, salary }, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{id}</td>
                                        <td>{first_name}</td>
                                        <td>{last_name}</td>
                                        <td>{email}</td>
                                        <td>{gender}</td>
                                        <td>{age}</td>
                                        <td>{salary}</td>
                                    </tr >
                                )
                            })}
                </tbody>
            </table>
        </div>


    )
}