import React from "react";
import Image from "next/image";




const CertificateContainer = (props) => {

    const photosize = 75

    return (
    <>

    {props.tags.map((certificateData, i) => {
        return (<Image 
            src={certificateData.image_url}
            alt="이미지"
            width={photosize}
            height={photosize}
            key={i}
            />
          );
                              })}

    </>
    )
}

export default CertificateContainer;