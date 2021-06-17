import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="sm:fixed w-full z-50">
        <div className="flex text-white items-center justify-between flex-row p-5">
          <div className="text-2xl cursor-pointer font-alexBrush">K. P</div>
          <div className="flex font-nunito font-semibold">
            <div className="mx-4 hover:text-pink-500 ">
              <a href="#home">Home</a>
            </div>
            <div className="mx-4 hover:text-pink-500">
              <a href="#about">About</a>
            </div>
            <div className="mx-4 hover:text-pink-500">
              <a href="#work">Work</a>
            </div>
            <div className="mx-4 hover:text-pink-500">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
