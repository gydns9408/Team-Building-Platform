import Link from "next/Link"
import styles from "../../styles/Home.module.css";

export default function RegisterPage(){
    return(
        <>
        <h1>회원가입</h1>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>
        </>
    )
}