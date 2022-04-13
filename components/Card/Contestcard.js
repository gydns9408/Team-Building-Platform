import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const imgType = { png: ".png" };

var simbolImageAddress = "/asset/simbol";
var skillStackAddress = "/asset/skillStack";

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
        <Image
          src={`${simbolImageAddress}${props.field}${imgType.png}`}
          alt="Picture of the author"
          width={500}
          height={500}
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
          width={500}
          height={500}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[1]}${imgType.png}`}
          alt="이미지"
          width={500}
          height={500}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[2]}${imgType.png}`}
          alt="이미지"
          width={500}
          height={500}
        />
        <Image
          src={`${skillStackAddress}${props.skillStack[3]}${imgType.png}`}
          alt="이미지"
          width={500}
          height={500}
        />
      </header>
      상금 : {props.prize}원
    </div>
  );
};

export default Card;
