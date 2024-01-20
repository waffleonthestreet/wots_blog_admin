import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import {Box, Input, Stack, Textarea, Button, Select, Option} from "@mui/joy";
import TextEditor from "../../sections/dashboard/article-editor/TextEditor";
import Editor from "../../components/Editor";
import Typography from "@mui/material/Typography";
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";

const ArticleDetails = () => {
    const [article, setArticle] = useState({})

    const params = useParams();

    const handleChangeCategoryNo = (e, newValue) => {
        setArticle({
            ...article,
            categoryNo: newValue
        })
    }

    const handleChangeValue = (e) => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value
        })
    }

    const handleChangeArticleContents = (data) => {
        setArticle({
            ...article,
            articleContents: data
        });
    }


    const handleClickSaveArticle = () => {
        axios.put(`/admin/article/${article?.articleNo}`, {
            categoryNo: article?.categoryNo,
            userNo: 1,
            articleTitle: article?.articleTitle,
            articleContents: article?.articleContents
        })
            .then(function (response) {
                alert('Save Success!!')
            });
    }

    const handleClickRemoveArticle = () => {
        axios.delete(`/admin/article/${article?.articleNo}`)
            .then(() => {
                alert("Remove Success!!!!!!!!!!")
            })
    }

    const init = async (articleNo) => {
        const {data} = await axios.get(`/admin/article/${articleNo}`);
        setArticle(data);
    }

    useEffect(() => {
        init(params.id);
    }, [params.id]);

    return (
        <Stack spacing={3}>
            <Select placeholder="카테고리" value={article?.categoryNo} onChange={handleChangeCategoryNo}>
                <Option value={1}>CS</Option>
                <Option value={2}>Programming</Option>
                <Option value={3}>Database</Option>
                <Option value={4}>DevOps</Option>
            </Select>
            <Input placeholder="아티클 제목" id="articleTitle" value={article?.articleTitle} onChange={handleChangeValue}/>
            <Box>
                <Editor value={article?.articleContents} handleChange={handleChangeArticleContents}/>
            </Box>
            <Stack direction="row" spacing={3}>
                <Button onClick={handleClickSaveArticle}>글쓰기</Button>
                <Button onClick={handleClickRemoveArticle}>삭제하기</Button>
            </Stack>
        </Stack>
    )
}

export default ArticleDetails