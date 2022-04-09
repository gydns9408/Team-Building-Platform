import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function TeamSearchPage() {
  return (
    <>
      <h1>팀 탐색</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
      </h2>
    </>
  );
}
