import React from "react";
import Image from "next/image";

const ProgramName = (props) => {
  const photosize = 50;
  return (
    <>
      <Image
        src={props.image_url}
        alt="이미지"
        width={photosize}
        height={photosize}
      />
      <a>{props.name}</a>
    </>
  );
};

const ProgramContainer = (props) => {
  return (
    <>
      {props.tags.map((programData, i) => {
        return (
          <ProgramName
            image_url={programData.image_url}
            name={programData.name}
            key={i}
          />
        );
      })}
    </>
  );
};

export default ProgramContainer;
