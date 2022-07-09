
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const FullEditor = ({editorState, setEditorState}) => {
  

  return (
    <Editor
      editorState={editorState}
      wrapperClassName="post-editor-wrapper"
      editorClassName="post-editor"
      onEditorStateChange={(editorState) => setEditorState(editorState)}
    />
  )
}
