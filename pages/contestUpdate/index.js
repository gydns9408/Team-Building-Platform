import Link from "next/link";
import styles from "../../styles/Home.module.css";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading?</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]


export default function ContestCreatePage() {

  let titleInputString;
  const titleInputCheck = (e) => {
    titleInputString = e.target.value;
    console.log(titleInputString);
  }

  return (
    <>
      <h1>공모전 수정</h1>
      <li>
      <a>제목 </a>
      <input
      id="titleInput"
      type="text"
      className="contestCreate-class"
      size="150"
      onChange={titleInputCheck}
      />
      </li>
      <li>
      <a>분야 </a>
      <input
      id="titleInput"
      type="text"
      className="contestCreate-class"
      size="30"
      />
      </li>
      <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
      <button type="submit" className="primary">
        수정
        </button>
      <h2 className={styles.title}>
        <Link href="/">
          <a>취소</a>
        </Link>
       </h2>
    </>
  );
}
