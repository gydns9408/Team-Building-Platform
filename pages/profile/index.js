import Link from "next/link";
import styles from "../../styles/Home.module.css";
import css from "styled-jsx/css";
import PCard from "../../components/Card/ProfileCard";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
`;

export default function ProfilePage() {
  return (
    <>
      <h1>프로필</h1>
      <PCard
        myPhoto="1"
        myField="1"
        explan="안녕하세요."
        name="오박사"
        address="태초마을"
        contactAddress="010 1234 4321"
        skillStack={[1, 2, 3, 4]}
        myEstimate={["AAA", "AAA", "AAA"]}
      />
      <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
      </h2>
      <style jsx>{style}</style>
    </>
  );
}
