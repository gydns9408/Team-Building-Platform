import Link from "next/Link"
import styles from "../../styles/Home.module.css";
import Card from '../../components/contestcard'

export default function CompetitionSearchPage(){
    return(
        <>
        <h1>대회 탐색</h1>
        <Card 
        participants = "10"
        field = "1"
        maintitle = "xx 공모전"
        subtitle = "zzz를 위한"
        explan = "yyyy 사가 주최하는 xx 공모전"
        tags = {["#발명", "#아이디어", "#창의력"]}
        skillStack = {[1,2,3,4]}
        prize = "100000000"
        />
        <h2 className={styles.title}>
          스레드
        </h2>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>
        </>
    )
}