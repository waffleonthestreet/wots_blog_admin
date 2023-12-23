import React from 'react';
import PropTypes from 'prop-types'
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/joy";
import Pagination from '@mui/material/Pagination';

const ArticleList = ({rows}) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{width: '800px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="5%">
              <Typography>No.</Typography>
            </TableCell>
            <TableCell width="45%">
              <Typography>Title</Typography>
            </TableCell>
            <TableCell width="25%">
              <Typography>CreatedAt</Typography>
            </TableCell>
            <TableCell width="25%">
              <Typography>EditedAt</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow>
              <TableCell>
                <Typography>1</Typography>
              </TableCell>
              <TableCell>
                <Typography>1</Typography>
              </TableCell>
              <TableCell>
                <Typography>1</Typography>
              </TableCell>
              <TableCell>
                <Typography>1</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </Box>
  )
}

ArticleList.defaultProps = {
  rows: [1, 2, 3, 4, 5]
}

export default ArticleList