import React from "react";
import Image from "next/image";

const imgType = { png: ".png" };

var professionIconImageAddress = "/asset/icon/tech_stack/profession_icon_";

const ProfessionName = (props) => {
    const photosize = 50
        return(<>
        <Image 
          src={ 
              props.id !== null
              ? `${professionIconImageAddress}${props.id}${imgType.png}`
              : `/asset/image/background/contest/default.svg` 
            }
          alt="이미지"
          width={photosize}
          height={photosize}
          />
          <a>{props.name}</a>
          </>
            )
    
}

const ProfessionsContainer = (props) => {



    return (
    <>

    {props.tags.map((professionData, i) => {
        return (<ProfessionName 
          id = {professionData.id}
          name = {professionData.name}
          key={i}/>
          );
                              })}

    </>
    )
}

export default ProfessionsContainer;