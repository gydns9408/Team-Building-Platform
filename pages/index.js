<<<<<<< HEAD
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function MainPage() {
  return (
    <>
      <h1>메인 페이지</h1>
      <h2 className={styles.title}>
        <Link href="screen/loginpage">
          <a>로그인</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/registerpage">
          <a>회원가입</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/competitionsearchpage">
          <a>대회 탐색</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/teamsearchpage">
          <a>팀 탐색</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/partnersearchpage">
          <a>파트너 탐색</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/guidepage">
          <a>가이드</a>
        </Link>
      </h2>
      <h2 className={styles.title}>
        <Link href="screen/profilepage">
          <a>프로필</a>
        </Link>
      </h2>
    </>
  );
=======
import Mainpage from '../components/mainpage'


export default function MainPage(){
  return(
      <>
      <Mainpage />
      </>
  )
>>>>>>> c8ce0558f548345c878471ebe372aae724009df5
}
