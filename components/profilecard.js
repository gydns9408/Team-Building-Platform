import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import css from "styled-jsx/css";
import Image from "next/image";
const imgType = { png: ".png" };
var simbolImageAddress = "/asset/simbol";
var skillStackAddress = "/asset/skillStack";
var profilePhotoAddress = "/asset/profilePhoto";
var estimateAddress = "/asset/estimate_";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 4rem;
  }
`;

const Pcard = (props) => {
  

  const photosize = 50

  return (
    <>
    <div>
      <Image
          src={`${profilePhotoAddress}${props.myPhoto}${imgType.png}`}
          alt="Picture of me"
          width={photosize}
          height={photosize}
        />
      <header>
        <Image
          src={`${simbolImageAddress}${props.myField}${imgType.png}`}
          alt="Picture of the author"
          width={photosize}
          height={photosize}
        />
      </header>
      <header>{props.explan}</header>
      <header>개인정보</header>
      <header>{props.name}</header>
      <header>{props.address}</header>
      <header>{props.contactAddress}</header>
      <header>기술스택</header>
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
      <header>타인평가</header>
      <header>
        <Image
          src={`${estimateAddress}${props.myEstimate[0]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        <Image
          src={`${estimateAddress}${props.myEstimate[1]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        <Image
          src={`${estimateAddress}${props.myEstimate[2]}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
        />
        </header>
    </div>
    <style jsx>{style}</style>
    </>
  );
};

export default Pcard;