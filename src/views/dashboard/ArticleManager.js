import React from 'react';
import PropTypes from 'prop-types'
import Stack from "@mui/joy/Stack";
import {Button, Input} from "@mui/joy";
import SearchToolbar from "../../sections/dashboard/article-manager/SearchToolbar";
import ArticleList from "../../sections/dashboard/article-manager/ArticleList";

const ArticleManager = () => {
  return (
    <Stack spacing={1}>
      <SearchToolbar/>
      <ArticleList/>
    </Stack>
  )
}

export default ArticleManager