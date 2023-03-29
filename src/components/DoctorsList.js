import Image from "next/image";
import React from "react";

const DoctorsList = ({
  name,
  hospital,
  specialization,
  about,
  price,
  photo,
}) => {
  return (
    <div id="doctorsList" className="flex flex-col md:flex-row">
      <div className="image-container flex justify-center">
        <Image src={photo} width={200} height={200} alt="photo" />
      </div>
      <div className="flex flex-col">
        <div>{name}</div>
        <div>
          <span>{hospital}</span>
          <span>{specialization}</span>
        </div>
        <div
          className="text-xs"
          dangerouslySetInnerHTML={{ __html: about }}
        ></div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default DoctorsList;
