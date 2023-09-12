import React from 'react';
import PropTypes from 'prop-types'
import {Outlet} from "react-router-dom";
import {Button} from "@mui/joy";
import useAuth from "../../hooks/useAuth";

const MainLayout = () => {
  const {logout} = useAuth();

  const handleClickLogout = () => {
    logout();
  }

  return (
    <>
      <div>It's MainLayout</div>
      <Button onClick={handleClickLogout}>로그아웃</Button>
      <Outlet/>
    </>
  )
}

export default MainLayout
