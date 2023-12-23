import React from 'react';
import PropTypes from 'prop-types'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from '@ckeditor/ckeditor5-react';

const TextEditor = () => {
  return (<CKEditor
    editor={ClassicEditor}
    data="<p>Hello from CKEditor 5!</p>"
    onReady={editor => {
      // You can store the "editor" and use when it is needed.
      console.log('Editor is ready to use!', editor);
    }}
    // onChange={(event, editor) => {
    //   const data = editor.getData();
    //   console.log({event, editor, data});
    // }}
    onBlur={(event, editor) => {
      const data = editor.getData();
      console.log('Blur.', editor, data);
    }}
    // onFocus={(event, editor) => {
    //   console.log('Focus.', editor);
    // }}
  />)
}

export default TextEditor