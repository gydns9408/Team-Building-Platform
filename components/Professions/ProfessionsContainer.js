import React from "react";
import Image from "next/image";

const imgType = { png: ".png" };

var professionIconImageAddress = "/asset/icon/tech_stack/profession_icon_";

const ProfessionName = (props) => {
        return(
            <h2>{this.props.name}</h2>
            )
    
}

const ProfessionsContainer = (props) => {

    const photosize = 50

    return (
    <>

    {props.tags.map((professionData, i) => {
        return (<Image 
          src={`${professionIconImageAddress}${professionData.id}${imgType.png}`}
          alt="이미지"
          width={photosize}
          height={photosize}
          key={i}/>
          );
                              })}

    </>
    )
}

export default ProfessionsContainer;