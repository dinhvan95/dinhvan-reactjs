import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 1em;
        padding: 0.25em 1em;
        cursor : ${props => {
        return props.disabled ? 'not-allowed' : 'pointer';
    }
    };
        background-color: ${props => {
        return props.color;
    }
    };
    `;
const SpanUI = styled.span`
        color : ${props => {
        return props.color1;
    }
    };
    `;
const ButtonCustom1 = styled.button`
    background-color : ${
        (props) => {
            return props.color;
        }
    };
    color : "grown";
    font-size : "1em";
    border: "1px solid black";
`;
export default function PracticeStyledComponent() {
    const [counter, setCounter] = useState(0);
    const [selfIncrease, setSelfIncrease] = useState(1);
    return (
        <>
            <Button color="yellow" onClick={() => setCounter(counter - 1)} disabled={counter === 0} >-</Button>
            <SpanUI color1={counter % 2 === 0 ? 'blue' : 'red'}>{counter}</SpanUI>
            <Button color="pink" onClick={() => setCounter(counter + 1)} disabled={counter === 10}>+</Button>
            <br/>
            <ButtonCustom1 color = {selfIncrease %2 === 0 ? 'white' : 'yellow'} onClick={() => setSelfIncrease(selfIncrease+1)} disabled={selfIncrease === 20}>{selfIncrease}</ButtonCustom1>
        </>
    );
}