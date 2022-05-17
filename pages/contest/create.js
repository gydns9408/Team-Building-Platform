import React, { useState, useEffect } from "react";
import Editor from "../../components/Editors/CKEditorTextEditor";
const contestCreatePage = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </div>
  );
};

export default contestCreatePage;

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading?</p>,
// });

// const uploadArticle = () => {

// };

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image"],
//     ["clean"],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// };
// /*
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
// ];

// const style = css`
//   .test {
//     background-color: white;
//     height: 60px;
//     font-size: 1rem;
//   }
// `;

// export default function ContestCreatePage() {
//   let titleInputString;
//   const titleInputCheck = (e) => {
//     titleInputString = e.target.value;
//     console.log(titleInputString);
//   };

//   return (
//     <>
//       <h1>공모전 생성</h1>
//       <li>
//         <a>제목 </a>
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="입력하세요"
//           className="contestCreate-class"
//           size="150"
//           onChange={titleInputCheck}
//         />
//       </li>
//       <li>
//         <a>분야 </a>
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="입력하세요"
//           className="contestCreate-class"
//           size="30"
//         />
//       </li>
//       <li>
//         <a>상금 </a>
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="입력하세요"
//           className="contestCreate-class"
//           size="30"
//         />
//       </li>
//       <li>
//         <a>시작일 </a>
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="입력하세요"
//           className="contestCreate-class"
//           size="30"
//         />
//       </li>
//       <li>
//         <a>종료일 </a>
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="입력하세요"
//           className="contestCreate-class"
//           size="30"
//         />
//       </li>
//       <QuillNoSSRWrapper
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         placeholder={"내용을 입력하세요"}
//       />
//       <Button>등록</Button>
//     </>
//   );
// }
