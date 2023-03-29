import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col mx-auto w-full lg:max-w-[85rem]">
        {children}
      </div>
    </>
  );
};

export default Layout;
