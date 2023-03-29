import React from "react";

const Header = ({ data, setName, setHospital }) => {
  const hospitalList = [
    "All",
    ...new Set(data && data.map((x) => x.hospital[0].name)),
  ];

  return (
    <div className="lg:mt-4 w-full h-auto xlg:h-[6rem] bg-sky-500 rounded-md px-3">
      <div className="text-2xl font-bold text-left pt-3">Doctor Finder</div>
      <div className="flex flex-col xlg:flex-row gap-2 xlg:gap-0 pt-2 pb-3 justify-between w-full xlg:w-1/2">
        <input
          className=""
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <select
          onChange={(e) => {
            setHospital(e.target.value);
          }}
        >
          <option value="" disabled hidden className="">
            Select Your Answer
          </option>
          {hospitalList &&
            hospitalList.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
        </select>

        <input />
      </div>
    </div>
  );
};

export default Header;
