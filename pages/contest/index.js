import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Card/Contestcard";
import css from "styled-jsx/css";
import React, { useState } from 'react';

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
  .grid2 {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
  }
`;

export default function CompetitionSearchPage() {

  let [chosenField, chosenFieldHandler] = useState("0")



  return (
    <>
      <h1>대회 탐색</h1>
      <h2 className="grid2">
      <h2>{chosenField}</h2>
      <button
      onClick={() => {chosenFieldHandler( chosenField = "1")}}
      >분야1</button>
      <button
      onClick={() => {chosenFieldHandler( chosenField = "2")}}
      >분야2</button>
      <button
      onClick={() => {chosenFieldHandler( chosenField = "3")}}
      >분야3</button>
      <button
      onClick={() => {chosenFieldHandler( chosenField = "4")}}
      >분야4</button>
      <button
      onClick={() => {chosenFieldHandler( chosenField = "5")}}
      >분야5</button>
      </h2>
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

export async function getServerSideProps() {
  const name = "program";
  const type = "TechStack";
  const data = await fetch(
    `${process.env.HOSTNAME}/api/tags/${type}?name=${name}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  return { props: {data} };
}
