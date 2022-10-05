import React from "react";
import styled from "styled-components";

const ImgUI = styled.img`
    width: 10em;
    height: 10em;
    layout="fill";
    objectFit="contain";
    border-radius: 5px;
`;
export default function CartComponent() {
    return (
        <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Icon</th>
                        <th>Detail Information</th>
                        <th>Price</th>
                        <th>After discount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(

                            ({ id, first_name, last_name, email, gender}, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{id}</td>
                                        <td>{first_name}</td>
                                        <td>{last_name}</td>
                                        <td>{email}</td>
                                        <td>{gender}</td>
                                    </tr >
                                )
                            })}
                </tbody>
            </table>
    );
}