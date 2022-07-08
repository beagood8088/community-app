import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="c52cj28kamy9ncytbsird78eizzq5ka5eghpxu14ocd1538a"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Write your post here...</p>"
        init={{
          height: 500,
          menubar: false,
          // plugins: [
          //   'advlist autolink lists link image charmap print preview anchor',
          //   'searchreplace visualblocks code fullscreen',
          //   'insertdatetime media table paste code help wordcount'
          // ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}
