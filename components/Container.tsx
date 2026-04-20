import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 mx-auto my-5 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  );
};

export default Container;
