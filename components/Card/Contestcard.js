import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import css from "styled-jsx/css";
import Image from "next/image";

const imgType = { png: ".png" };

var simbolImageAddress = "/asset/simbol";
var skillStackAddress = "/asset/skillStack";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
`;

const Card = (props) => {
  let tagsPrint = "";

  const photosize = 50
  let i = 0;
  for (; i < props.tags.length; i++) {
    tagsPrint += props.tags[i] + " ";
  }

  return (
    <>
    <div>
      {props.participants}명
      <header>
        <Image
          src={`${simbolImageAddress}${props.field}${imgType.png}`}
          alt="Picture of the author"
          width={photosize}
          height={photosize}
        />
        &nbsp;
        {props.maintitle}
      </header>
      <header>{props.subtitle}</header>
      <header>{props.explan}</header>
      <header>{tagsPrint}</header>
      <header>
        <Image
          src={`${skillStackAddress}${props.skillStack[0]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[1]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[2]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[3]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
      </header>
      상금 : {props.prize}원
    </div>
    <style jsx>{style}</style>
    </>
  );
};

export default Card;
