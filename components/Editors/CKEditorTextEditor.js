import React, { useEffect, useRef, useState } from "react";

const Editor = ({ onChangeHandle, editorLoaded, name, value }) => {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

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
      type=""
      name={name}
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        onChangeHandle(editor.getData());
      }}
    />
  );
};

export default Editor;
