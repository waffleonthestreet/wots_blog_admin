import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Box, Input, Stack, Textarea, Button, Select, Option} from "@mui/joy";
import TextEditor from "../../sections/dashboard/article-editor/TextEditor";
import Editor from "../../components/Editor";
import Typography from "@mui/material/Typography";
import axios from "../../utils/axios";

const ArticleEditor = () => {
    const [articleContents, setArticleContents] = useState('')
    const [articleTitle, setArticleTitle] = useState('');
    const handleChangeArticleContents = (data) => {
        setArticleContents(data);
    }

    const handleClickSaveArticle = () => {
        axios.post('/admin/article', {
            categoryNo: 2,
            userNo: 1,
            articleTitle: articleTitle,
            articleContents: articleContents
        })
            .then(function (response) {
                setArticleContents('')
                setArticleTitle('')
                alert('Save Success!!')
            });
    }

    return (
        <Stack spacing={3}>
            <Select placeholder="카테고리">
                <Option value={1}>ㅋㅏ테고리 1</Option>
                <Option value={2}>ㅋㅏ테고리 2</Option>
                <Option value={3}>ㅋㅏ테고리 3</Option>
            </Select>
            <Input placeholder="아티클 제목" value={articleTitle} onChange={(e) => {
                setArticleTitle(e.target.value)
            }}/>
            <Box>
                <Editor value={articleContents} handleChange={handleChangeArticleContents}/>
            </Box>
            <Button onClick={handleClickSaveArticle}>글쓰기</Button>
        </Stack>
    )
}

export default ArticleEditor