import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Card/Contestcard";
import css from "styled-jsx/css";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
`;

export default function CompetitionSearchPage() {
  return (
    <>
      <h1>대회 탐색</h1>
      <h2 className={styles.grid}>
        <Card
          participants="10"
          field="1"
          maintitle="xx 공모전"
          subtitle="zzz를 위한"
          explan="yyyy 사가 주최하는 xx 공모전"
          tags={["#발명", "#아이디어", "#창의력"]}
          skillStack={[1, 2, 3, 4]}
          prize="100000000"
        />
        <Card
          participants="20"
          field="1"
          maintitle="xxxx 공모전"
          subtitle="zzz를 위한"
          explan="yyyy 사가 주최하는 xx 공모전"
          tags={["#발명", "#아이디어", "#창의력"]}
          skillStack={[1, 2, 3, 4]}
          prize="100000000"
        />
        <Card
          participants="30"
          field="1"
          maintitle="abcd 공모전"
          subtitle="zzz를 위한"
          explan="yyyy 사가 주최하는 xx 공모전"
          tags={["#발명", "#아이디어", "#창의력"]}
          skillStack={[1, 2, 3, 4]}
          prize="100000000"
        />
        <Card
          participants="300"
          field="1"
          maintitle="xyz 공모전"
          subtitle="zzz를 위한"
          explan="yyyy 사가 주최하는 xx 공모전"
          tags={["#발명", "#아이디어", "#창의력"]}
          skillStack={[1, 2, 3, 4]}
          prize="100000000"
        />
      </h2>
      <h2 className={styles.title}>스레드</h2>
      <h2 className={styles.title}>
        <Link href="/contest/create" passHref>
          <button>공모전 생성</button>
        </Link>
        <Link href="/contest/update" passHref>
          <button>공모전 수정</button>
        </Link>
        <Link href="/">
          <a>메인으로</a>
        </Link>
      </h2>
      <style jsx>{style}</style>
    </>
  );
}

// export async function getServerSideProps() {
//   const body = {
//     contest_name: "test contest name",
//     content:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//     prize: 100,
//     start_period: moment().utc().toISOString(),
//     end_period: moment().utc().toISOString(),
//     spcialization: ["미술/공예"],
//     corporate_type: "공공기관/공기업",
//     userID: 1,
//     title: "test Title",
//   };
//   const data = await fetch(`http://localhost:3000/api/artilce/contestArticle`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });
//   console.log(data);
//   return { props: {} };
// }
