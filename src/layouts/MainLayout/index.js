import React from 'react';
import PropTypes from 'prop-types'
import {Outlet} from "react-router-dom";
import {Button} from "@mui/joy";
import useAuth from "../../hooks/useAuth";
import {Link} from 'react-router-dom';

const MainLayout = () => {
    const {logout} = useAuth();

    const handleClickLogout = () => {
        logout();
    }

    return (
        <>
            <div>It's MainLayout</div>
            <Link to='/'> Home </Link>
            <Link to='/article-editor'> 글쓰기 </Link>
            <Link to='/article-manager'> 아티클 관리 </Link>
            <Button onClick={handleClickLogout}>로그아웃</Button>
            <Outlet/>
        </>
    )
}

export default MainLayout
