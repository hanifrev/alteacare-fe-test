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
    <div
      id="doctorsList"
      className="flex flex-col md:flex-row border-2 border-blue-400 rounded-md bg-slate-300"
    >
      <div className="image-container flex justify-center bg-white">
        <Image src={photo} width={200} height={200} alt="photo" />
      </div>
      <div className="flex flex-col text-xs sm:text-sm pt-3 gap-2 px-1 justify-evenly">
        <div className="font-bold">{name}</div>
        <div className="italic font-medium">
          <span>{hospital}</span>
          <span> - </span>
          <span>{specialization}</span>
        </div>
        <div
          className="text-xs"
          dangerouslySetInnerHTML={{ __html: about.replace(/&nbsp;/g, " ") }}
        ></div>
        <div className="font-bold flex justify-end">{price}</div>
      </div>
    </div>
  );
};

export default DoctorsList;
