import Link from "next/Link"
import styles from "../../styles/Home.module.css";

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