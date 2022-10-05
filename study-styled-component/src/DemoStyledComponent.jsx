import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${(props) => {
    console.log("props", props);
    return props.color;
  }};
`;

export default function DemoStyledComponent() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <Button color = "blue" onClick={() => setCounter(counter - 1)}>-</Button>
            <span>{counter}</span>
            <Button  color = "green" onClick={() => setCounter(counter + 1)}>+</Button>
        </>
    );
}