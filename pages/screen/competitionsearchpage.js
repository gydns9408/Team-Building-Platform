import Link from "next/Link"
import styles from "../../styles/Home.module.css";

export default function CompetitionSearchPage(){
    return(
        <>
        <h1>대회 탐색</h1>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>
        </>
    )
}