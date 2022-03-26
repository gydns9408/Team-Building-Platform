import Link from "next/Link"
import styles from "../../styles/Home.module.css";


export default function LoginPage(){
    return(
        <>
        <h1>로그인</h1>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>
        </>
    )
}