import React, { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import { FIELD_FORM_LOGIN } from "./constants";

const ButtonSubmit = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 8px;
`;
export default function CashFlowUseHookValidateFormComponent({ account, typeAccount, banks }) {
    const { watch, handleSubmit, formState: { errors }, register, getValues, control } = useForm();

    const onSubmit = async () => {
        console.log("Submit");
    };
    const [
        accountOfNumber, 
        typeOfAccount, 
        differentBank, 
        bankIsReceived, 
        branchBank, 
        accountIsReceived, 
        moneyIsSent, 
        note
    ] = watch(
        FIELD_FORM_LOGIN.ACCOUNT_OF_NUMBER, 
        FIELD_FORM_LOGIN.TYPE_OF_ACCOUNT,
        FIELD_FORM_LOGIN.DIFFERENT_BANK,
        FIELD_FORM_LOGIN.BANK_IS_RECEIVED, 
        FIELD_FORM_LOGIN.BRANCH_BANK, 
        FIELD_FORM_LOGIN.ACCOUNT_IS_RECEIVED, 
        FIELD_FORM_LOGIN.MONEY_IS_SENT, 
        FIELD_FORM_LOGIN.NOTE,
    );
    const feeMoney = useMemo(() => Math.floor((+getValues(FIELD_FORM_LOGIN.MONEY_IS_SENT))/50), [+getValues(FIELD_FORM_LOGIN.MONEY_IS_SENT)]);
    const totalMoney = +getValues(FIELD_FORM_LOGIN.ACCOUNT_OF_NUMBER);
    const accountId = +getValues(FIELD_FORM_LOGIN.TYPE_OF_ACCOUNT);
    console.log(accountId);
    return (
        <div style={{ padding: "1em", border: "1px solid #EBECEE", borderRadius: "2px", }}>
            <h2 className="m-3" style={{ textAlign: "center" }}>Chuyển khoản ngân hàng</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-3">
                    <label className='form-label' style={{ width: "100%", textAlign: "start" }}>
                        Số tài khoản
                    </label>
                    <select 
                    style={{ backgroundColor: "#EBECEE" }} 
                    className="form-select" 
                    aria-label="Default select example" 
                    name = {FIELD_FORM_LOGIN.ACCOUNT_OF_NUMBER} 
                    {...register(FIELD_FORM_LOGIN.ACCOUNT_OF_NUMBER, 
                    { required: "Account is required", })}>
                        {
                            account.map(
                                ({ name, accountNumber, totalMoney }, key) => {
                                    return (
                                        <option value={totalMoney}>{accountNumber} - {name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                    <br/><b>Số tiền có thể chuyển: {totalMoney} VNĐ</b>
                </div>
                <div className="m-3">
                    <label className="form-label">Loại tài khoản</label>
                    <select 
                    style={{ backgroundColor: "#EBECEE" }} 
                    className="form-select" 
                    aria-label="Default select example" 
                    name={FIELD_FORM_LOGIN.TYPE_OF_ACCOUNT} 
                    {...register(FIELD_FORM_LOGIN.TYPE_OF_ACCOUNT, 
                    { required: "Type account is required", })}>
                        {
                            typeAccount.map(
                                ({ name, key, value }) => {
                                    return (
                                        <option value={value}>{name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>
                <div className="m-3" style={{ display: accountId == 2 ? "block" : "none" }}>
                    <label className="form-label">Ngân hàng khác</label>
                    <input style={{ backgroundColor: "#EBECEE" }} type='text' className="form-control" name={FIELD_FORM_LOGIN.DIFFERENT_BANK} {...register(FIELD_FORM_LOGIN.DIFFERENT_BANK, {required : "This field is required", minLength : 1, maxLength : 20,})}/> 
                    {errors.differentBank && <p style = {{color:"red"}}>{errors?.differentBank?.message}</p>}
                    {errors.differentBank && ["minLength","maxLength"].includes(errors?.differentBank?.type) && <p style = {{color:"red"}}>Không được nhập quá 20 kí tự</p>}
                </div>
                <div className="m-3">
                    <label className="form-label">Ngân hàng thụ hưởng</label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example" name={FIELD_FORM_LOGIN.BANK_IS_RECEIVED} {...register(FIELD_FORM_LOGIN.BANK_IS_RECEIVED, { required: "Received bank is required", })}>
                        {
                            banks.map(
                                ({ name, key, branch }) => {
                                    return (
                                        <option value={key + 1}>{name}</option>
                                    );
                                }
                            )
                        }
                    </select>
                </div>
                <div className="m-3">
                    <label className="form-label">Chi nhánh</label>
                    <select style={{ backgroundColor: "#EBECEE" }} className="form-select" aria-label="Default select example" name={FIELD_FORM_LOGIN.BRANCH_BANK} {...register(FIELD_FORM_LOGIN.BRANCH_BANK, { required: "Branch bank is required", })}>

                        {
                            banks.map(
                                ({ name, key, branch }) => {
                                    return (
                                        <option value={key + 1}>{branch}</option>
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
                    <input style={{ backgroundColor: "#EBECEE" }} type='text' className="form-control" name={FIELD_FORM_LOGIN.ACCOUNT_IS_RECEIVED} {...register(FIELD_FORM_LOGIN.ACCOUNT_IS_RECEIVED, {required : "This field is required", minLength : 1, maxLength : 20,})} />
                    {errors.accountIsReceived && <p  style = {{color:"red"}}>{errors?.accountIsReceived?.message}</p>}
                    {errors.accountIsReceived && ["minLength","maxLength"].includes(errors?.accountIsReceived?.type) && <p style = {{color:"red"}}>Không được nhập quá 20 kí tự</p>}
                </div>
                <div className="m-3">
                    <label className='form-label' style={{ width: "100%", textAlign: "start" }}>
                        Số tiền chuyển
                    </label>
                    <input style={{ backgroundColor: "#EBECEE" }} type='number' className="form-control" name={FIELD_FORM_LOGIN.MONEY_IS_SENT} {...register(FIELD_FORM_LOGIN.MONEY_IS_SENT, {required : "This field is required", min : 10000, max : totalMoney,})} />
                    {errors.moneyIsSent && <p  style = {{color:"red"}}>{errors?.moneyIsSent?.message}</p>}
                    {errors.moneyIsSent && ["min","max"].includes(errors?.moneyIsSent?.type) && <p style = {{color:"red"}}>Không được chuyển tiền thấp hơn 10,000đ và cao hơn {totalMoney} VNĐ</p>}
                    <br /><b>Phí chuyển tiền: </b>
                    <b>{feeMoney || 0} VNĐ</b>
                </div>
                <div className="m-3">
                    <label className="form-label" style={{ width: "100%", textAlign: "start" }}>
                        Diễn giải
                    </label>
                    <textarea style={{ backgroundColor: "#EBECEE" }} className="form-control" placeholder="Nhập tiếng Việt không dấu, tối đa 140 kí tự" name={FIELD_FORM_LOGIN.NOTE} {...register(FIELD_FORM_LOGIN.NOTE, {minLength : 1, maxLength : 140,})} />
                    {errors.note && ["minLength","maxLength"].includes(errors?.note?.type) && <p style = {{color:"red"}}>Không được nhập quá 140 kí tự</p>}
                </div>
                <ButtonSubmit type='submit' className='btn btn-primary'>Submit</ButtonSubmit>
            </form>
        </div>
    );
}