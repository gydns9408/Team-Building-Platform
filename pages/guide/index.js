import Link from "next/link";
import styles from "../../styles/Home.module.css";

<<<<<<< HEAD:pages/screen/guidepage.js
export default function GuidePage() {
  return (
    <>
      <h1>가이드</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
      </h2>
    </>
  );
}
=======
export default function GuidePage(){
    return(
        <>
        <h1>도움말</h1>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>

        </>
    )
}
>>>>>>> c8ce0558f548345c878471ebe372aae724009df5:pages/guide/index.js
