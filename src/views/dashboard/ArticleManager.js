import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import Stack from "@mui/joy/Stack";
import {Button, Input} from "@mui/joy";
import SearchToolbar from "../../sections/dashboard/article-manager/SearchToolbar";
import ArticleList from "../../sections/dashboard/article-manager/ArticleList";
import axios from "../../utils/axios";

const ArticleManager = () => {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    const init = async () => {
        const {data} = await axios.get(`/admin/articles?page=${page}&pageSize=${10}`);
        setRows(data.data);
        setTotalCnt(data.maxCnt)
    }

    useEffect(() => {
        init();
    }, [page]);

    return (
        <Stack spacing={1}>
            <SearchToolbar/>
            <ArticleList rows={rows} page={page} setPage={setPage} totalCnt={totalCnt}/>
        </Stack>
    )
}

export default ArticleManager