import axios from "axios";
import React, { useState } from "react";
import DoctorsList from "../components/DoctorsList";
import Header from "../components/Header";

const Index = ({ data }) => {
  const doctors = data;
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [specialization, setSpecialization] = useState("");

  return (
    <>
      <Header
        data={data}
        setName={setName}
        setHospital={setHospital}
        setSpecialization={setSpecialization}
      />
      <div className="flex flex-wrap justify-center lg:justify-between gap-16 pt-8 px-6 overflow-hidden">
        {doctors
          .filter((val) => {
            if (name == "") {
              return val;
            } else if (val.name.toLowerCase().includes(name.toLowerCase())) {
              return val;
            }
          })
          .filter((val) => {
            if (hospital == "" || hospital == "All") {
              return val;
            } else if (val.hospital[0].name == hospital) {
              return val;
            }
          })
          .filter((val) => {
            if (specialization == "" || specialization == "All") {
              return val;
            } else if (val.specialization.name == specialization) {
              return val;
            }
          })
          .map((item) => {
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

export default Index;

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
