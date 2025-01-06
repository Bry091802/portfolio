import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 px-32 bg-dark">
      <div className="container">
        <div className=" flex items-center justify-between">
          <Link to="/" className=" flex items-center gap-8">
            <img src={`${imgPath}/logo.png`} alt="" className="w-[50px]"/>
            <p className="text-[22px]">Bry</p>
          </Link>
          <div className="flex justify-between items-center gap-5">
            <ul className="flex items-center justify-between gap-10 uppercase">
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Skills</NavLink></li>
                <li><NavLink>Contacts</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
