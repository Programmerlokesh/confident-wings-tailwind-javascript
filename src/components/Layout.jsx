import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="pt-40 md:pt-32 sm:pt-28 xsm:pt-[8rem] pb-12">
      {children}
    </section>
  );
};

export default Layout;
