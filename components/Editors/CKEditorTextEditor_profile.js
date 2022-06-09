import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const styles = {
  textEditer: {
    minHeight : "500px"
  },
};

const useStyles = makeStyles(styles);

const Editor = ({ onChangeHandle, editorLoaded, name, value }) => {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  const classes = useStyles();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  useEffect(() => {
    if (editorRef.current !== null) setLoading(false);
  }, [editorRef]);

  if (loading) return <div>loading...</div>;

  return (
    <CKEditor
    className={classes.textEditer}
      type=""
      name={name}
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        onChangeHandle(editor.getData());
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
        writer.setStyle(
          "min-height",
          "300px",
            editor.editing.view.document.getRoot()
        );
        });
    }}
    />
  );
};

export default Editor;
