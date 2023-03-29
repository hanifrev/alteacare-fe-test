import axios from "axios";
import React, { useState } from "react";
import DoctorsList from "../components/DoctorsList";
import Header from "../components/Header";

const index = ({ data }) => {
  console.log(data);
  const doctors = data;
  // const [doctors, setDoctors] = useState(data);

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between gap-16 pt-8 px-6 overflow-hidden">
        {doctors.map((item) => {
          return (
            <DoctorsList
              key={item.doctor_id}
              name={item.name}
              hospital={item.hospital[0].name}
              specialization={item.specialization.name}
              about={item.about_preview}
              price={item.price.formatted}
              photo={item.photo.formats.medium}
            />
          );
        })}
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc`
  );

  return {
    props: {
      data: data.data || {},
    },
  };
}
