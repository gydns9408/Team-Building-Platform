import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
var simbolImageAddress = "/public/asset/simbol";
var skillStackAddress = "/public/asset/skillStack";

const Card = (props) => {
  let tagsPrint = "";

  let i = 0;
  for (; i < props.tags.length; i++) {
    tagsPrint += props.tags[i] + " ";
  }

  return (
    <div>
      {props.participants}명
      <header>
        <Image src={simbolImageAddress + props.field + ".png"} alt="이미지" />
        &nbsp;
        {props.maintitle}
      </header>
      <header>{props.subtitle}</header>
      <header>{props.explan}</header>
      <header>{tagsPrint}</header>
      <header>
        <Image
          src={skillStackAddress + props.skillStack[0] + ".png"}
          alt="이미지"
        />
        <Image
          src={skillStackAddress + props.skillStack[1] + ".png"}
          alt="이미지"
        />
        <Image
          src={skillStackAddress + props.skillStack[2] + ".png"}
          alt="이미지"
        />
        <Image
          src={skillStackAddress + props.skillStack[3] + ".png"}
          alt="이미지"
        />
      </header>
      상금 : {props.prize}원
    </div>
  );
};

export default Card;
