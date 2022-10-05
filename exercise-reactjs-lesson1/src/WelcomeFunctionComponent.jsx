import { useState } from "react";

export default function WelcomeFunctionComponent() {
    const [nameText, setNameText] = useState("");
    
    const handleChangeName = (e) => {
        console.log("e ===",e);
    }
    const handleKeyInput = (e) => {
        const KEY = "";
        if(e.key.toUppercase() === KEY.toUppercase()){
            setNameText(e.target.value);
        }
    }
    const onRemoveText = () => {
        setNameText("");
    }
    return (
        <div>
            <input value={nameText} onChange = {(e) => handleChangeName(e)}/>
            <button onClick={onRemoveText()}>Remove</button>
            <p>{nameText ? "Hello "+nameText : " "}</p>
        </div>
    )
}