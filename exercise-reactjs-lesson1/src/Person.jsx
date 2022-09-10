import React from "react";

export default function Person({ data }) {
    return (
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

    )
}