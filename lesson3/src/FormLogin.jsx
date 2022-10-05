import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login } from "./api";

const ButtonSubmit = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 8px;
`;

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;
export default function FormLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  //
  const [error, setError] = useState({
    isErrorUserName: false,
    isErrorPassword: false,
    messageErrorUserName: "",
    messageErrorPassword: "",
  });

  //username => error, message
  //pass => error, mess

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const result = await login({
      email: userName,
      password: password,
    });
    if (result && Object.keys(result).length) {
      alert("Login success");
    } else {
      alert("fail");
    }
  };

  useEffect(() => {
    console.log("username", userName, error.isErrorUserName);
    if (!userName.trim().length) {
      return setError(
        (pre) =>
          (pre = {
            ...error,
            isErrorUserName: true,
            messageErrorUserName: "This field is not empty",
          })
      );
    }
    return setError(
      (pre) =>
        (pre = {
          ...error,
          isErrorUserName: false,
          messageErrorUserName: "",
        })
    );
  }, [userName, isSubmit]);

  useEffect(() => {
    if (!password.trim().length) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword: "This field is not empty",
          })
      );
    }
    if (password.trim().length < 8 && password.trim().length > 0) {
      return setError(
        (pre) =>
          (pre = {
            ...error,
            isErrorPassword: true,
            messageErrorPassword: "Password have less 8 characters",
          })
      );
    }

    return setError(
      (pre) =>
        (pre = {
          ...pre,
          isErrorPassword: false,
          messageErrorPassword: "",
        })
    );
  }, [password, isSubmit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='mb-3'>
        <label
          className='form-label'
          style={{ width: "100%", textAlign: "start" }}
        >
          UserName
        </label>
        <input
          type='text'
          className='form-control'
          value={userName}
          onChange={(e) => setUserName((pre) => (pre = e.target.value))}
        />
        {error.isErrorUserName && isSubmit && (
          <ErrorText className='form-text danger'>
            {error.messageErrorUserName}
          </ErrorText>
        )}
      </div>
      <div className='mb-3'>
        <label
          className='form-label'
          style={{ width: "100%", textAlign: "start" }}
        >
          Password
        </label>
        <input
          type={isShowPassword ? "text" : "password"}
          className='form-control'
          value={password}
          onChange={(e) => setPassword((pre) => (pre = e.target.value))}
        />
        {error.isErrorPassword && isSubmit && (
          <ErrorText className='form-text danger'>
            {error.messageErrorPassword}
          </ErrorText>
        )}
      </div>
      <div className='mb-3 form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          id='exampleCheck1'
          checked={isShowPassword}
          onChange={(e) => setIsShowPassword((e) => e.target.checked)}
        />
        <label
          className='form-check-label'
          style={{ width: "100%", textAlign: "start" }}
        >
          Show Password
        </label>
      </div>
      <ButtonSubmit
        type='submit'
        className='btn btn-primary'
      >
        Submit
      </ButtonSubmit>
    </form>
  );
}
