import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonSubmit = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 8px;
`;
const ErrorText = styled.div`
    color : red;
    text-align : start;
`;
export default function CashFlowComponent({account, typeAccount, banks}) {
    const [totalmoneyAccountChecked, setTotalmoneyAccountChecked] = useState(0);
    const [displayDifferentBank, setDisplayDifferentBank] = useState(0);
    const [moneyIsSent, setMoneyIsSent] = useState(0);
    const [note, setNote] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState(
        {
            isErrorMoneySent : false,
            messageErrorMoney : "",
        }
    );
    const [errorNote, setErrorNote] = useState({
        isOverChar : false,
        messageOverChar : "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
    }
    useEffect(() => {
        if(note.length > 140){
            return setErrorNote(
                (pre) => (
                    pre = {
                        ...errorNote,
                        isOverChar: true,
                        messageOverChar: "Note is too long!",
                    }
                )
            );
        }
        return setErrorNote(
            (pre) => (
                pre = {
                    ...errorNote,
                    isOverChar: false,
                    messageOverChar: "",
                }
            )
        );
    },[note,isSubmit]);
    useEffect(() => {
        if(moneyIsSent < 0){
            return setError(
                (pre) => (
                    pre = {
                        ...error,
                        isErrorMoneySent: true,
                        messageErrorMoney: "Money entered is in invalid",
                    }
                )
            );
        }
        if(moneyIsSent - totalmoneyAccountChecked > 0){
            return setError(
                (pre) => (
                    pre = {
                        ...error,
                        isErrorMoneySent : true,
                        messageErrorMoney: "Sorry. Money need to sent is larger than your total money. Please check again!",
                    }
                )
            );
        }
        return setError(
            (pre) => (
                pre = {
                    ...error,
                    isErrorMoneySent : false,
                    messageErrorMoney : "",
                }
            )
        );
    }, [moneyIsSent, isSubmit]);
    return (
        <div style={{padding: "1em", border: "1px solid #EBECEE", borderRadius: "2px",}}>
            <h2 className="m-3" style={{textAlign:"center"}}>Chuyển khoản ngân hàng</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="m-3">
                    <label className='form-label' style={{ width: "100%", textAlign: "start" }}>
                        Số tài khoản
                    </label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example" onChange={(e) => setTotalmoneyAccountChecked((pre) => (pre = e.target.value))}>
                        {
                            account.map(
                                ({name, accountNumber, totalMoney}, key) => {
                                    return (
                                        <option value={totalMoney}>{accountNumber} - {name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                    <br/><b>Số tiền có thể chuyển: {totalmoneyAccountChecked} VNĐ</b>
                </div>
                <div className="m-3">
                    <label className="form-label">Loại tài khoản</label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example" onChange={(e) => setDisplayDifferentBank((pre) => (pre = e.target.value))}>
                        {
                            typeAccount.map(
                                ({name, key, value}) => {
                                    return (
                                        <option value={value}>{name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>
                <div className="m-3" style = {{display : displayDifferentBank == 2 ? "block" : "none"}}>
                    <label className="form-label">Ngân hàng khác</label>
                    <input style={{ backgroundColor: "#EBECEE" }} type='text' className="form-control" />
                </div>
                <div className="m-3">
                    <label className="form-label">Ngân hàng thụ hưởng</label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example">
                        {
                            banks.map(
                                ({name, key, branch}) => {
                                    return (
                                        <option value={key+1}>{name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>
                <div className="m-3">
                    <label className="form-label">Chi nhánh</label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example">
        
                        {
                            banks.map(
                                ({name, key, branch}) => {
                                    return (
                                        <option value={key+1}>{branch}</option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>
                <div className="m-3">
                    <label className='form-label' style={{ width: "100%", textAlign: "start" }}>
                        Số tài khoản thụ hưởng
                    </label>
                    <input style={{ backgroundColor: "#EBECEE" }} type='text' className="form-control" />
                </div>
                <div className="m-3">
                    <label className='form-label' style={{ width: "100%", textAlign: "start" }}>
                        Số tiền chuyển
                    </label>
                    <input style={{ backgroundColor: "#EBECEE" }} type='number' className="form-control" onChange={(e) => setMoneyIsSent((pre) => (pre = (e.target.value)))}/>
                    {
                        error.isErrorMoneySent && (<ErrorText  className="form-text danger">
                            {error.messageErrorMoney}
                        </ErrorText>)
                    }
                    <br/><b>Phí chuyển tiền: </b>
                    <b>{moneyIsSent/50} VNĐ</b>
                </div>
                <div className="m-3">
                    <label className="form-label" style={{ width: "100%", textAlign: "start" }}>
                        Diễn giải
                    </label>
                    <textarea style={{ backgroundColor: "#EBECEE" }} className="form-control" placeholder="Nhập tiếng Việt không dấu, tối đa 140 kí tự" onChange={(e) => setNote((pre) => (pre = e.target.value))}/>
                    {
                        errorNote.isOverChar && (
                            <ErrorText>
                                {errorNote.messageOverChar}
                            </ErrorText>
                        )
                    }
                </div>
                <ButtonSubmit type='submit' className='btn btn-primary'>Submit</ButtonSubmit>
            </form>
        </div>
    );
}