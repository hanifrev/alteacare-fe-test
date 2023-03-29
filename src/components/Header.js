import React, { useState } from "react";

const Header = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-4 w-full h-auto xlg:h-[6rem] bg-sky-500 rounded-md px-3">
      <div className="text-2xl font-bold text-left pt-3">Doctor Finder</div>
      <div className="flex flex-col xlg:flex-row gap-2 xlg:gap-0 pt-2 pb-3 justify-between w-full xlg:w-1/2">
        <input
          className=""
          type="text"
          placeholder="Search"
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
        />
        <input />
        <input />
      </div>
    </div>
  );
};

export default Header;
