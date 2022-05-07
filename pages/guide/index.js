import Link from "next/link";
import styles from "../../styles/Home.module.css";
import css from "styled-jsx/css";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
`;

export default function GuidePage() {
  return (
    <>
      <h1>가이드</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
      </h2>
      <style jsx>{style}</style>
    </>
  );
}
