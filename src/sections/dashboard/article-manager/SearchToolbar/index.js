import React from 'react';
import PropTypes from 'prop-types'
import {Button, Input} from "@mui/joy";
import Stack from "@mui/joy/Stack";

const SearchToolbar = () => {
  return <Stack direction="row" spacing={1}>
    <Input/>
    <Button>검색</Button>
  </Stack>
}

export default SearchToolbar