import React from 'react';
import PropTypes from 'prop-types'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import axios from "../../utils/axios";

class CustomUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return new Promise((resolve, reject) => {
            this.loader.file.then((file) => {
                const data = new FormData();
                data.append("images", file);

                // 데이터를 서버로 전송하는 부분을 여기에 작성해야 합니다.


                // 아래 코드는 Blob URL을 생성하며 이를 사용하여 이미지를 삽입합니다.

                // resolve({default: window.URL.createObjectURL(file)});


                return new Promise((res, rej) => {
                    axios
                        .post('/admin/upload/file', data, {
                            onUploadProgress: e => {
                                console.log(
                                    // show upload process
                                    Math.round((e.loaded / e.total) * 100) + " %"
                                );
                            }
                        })
                        .then(response => {
                            console.log(response.data);
                            resolve({default: response.data});
                        })
                        .catch(error => {
                            reject("Server Error");
                            console.log("Server Error : ", error);
                        });
                });
            });
        });
    }

    abort() {
        // 파일 전송이 중단될 때 처리하는 로직을 작성해야 합니다.
    }
}

function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new CustomUploadAdapter(loader);
    };
}

const Editor = ({value, handleChange}) => {

    return (<CKEditor
        config={{
            extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        data={value}
        onReady={editor => {
            console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
            // const data = editor.getData();
        }}
        onBlur={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            handleChange(data)
        }}
        // onFocus={(event, editor) => {
        //   console.log('Focus.', editor);
        // }}
    />)
}

export default Editor