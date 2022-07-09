import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const FullEditor = () => {
  const [editorState, setEditorState] = useState()

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(editorState) => setEditorState(editorState)}
    />
  )
}
