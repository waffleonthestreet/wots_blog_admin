import React from 'react';
import PropTypes from 'prop-types'
import {Button} from "@mui/joy";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {login} = useAuth();

  const handleClickLogin = () => {
    login();
  }

  return (
    <>
      <div>It's Login</div>
      <Button onClick={handleClickLogin}>로그인</Button>
    </>
  )
}

export default Login