import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor : ${props => { return props.disabled ? 'not-allowed' : 'pointer'; }};
  background-color: ${(props) => {
    return props.color;
  }};
`;
const SpanUI = styled.span`
  color: ${(props) => {
    console.log(props.color1, "spanUi");
    return props.color1;
  }};
  font-size: 1em;
`
export default function DemoStyledComponent() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button color="blue" onClick={() => setCounter(counter + 1)} disabled={counter === 10}>+</Button>
      <SpanUI color1={`${counter % 2 === 0 ? 'red' : 'green'}`}>{counter}</SpanUI>
      <Button color="green" onClick={() => setCounter(counter - 1)} disabled={counter === 0}>-</Button>
    </>
  );
}