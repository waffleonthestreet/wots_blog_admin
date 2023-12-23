import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Input, Stack} from "@mui/joy";
import useAuth from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";

const Login = () => {
    const [userId, handleChangeUserId] = useInput('');
    const [userPw, handleChangeUserPw] = useInput('');

    const {login} = useAuth();

    const handleClickLogin = () => {
        login(userId, userPw);
    }

    return (
        <>
            <div>It's Login</div>
            <Stack spacing={2}>
                <Input value={userId} onChange={handleChangeUserId}/>
                <Input value={userPw} onChange={handleChangeUserPw} type="password"/>
                <Button onClick={handleClickLogin}>로그인</Button>
            </Stack>
        </>
    )
}

export default Login