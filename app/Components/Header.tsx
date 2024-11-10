import React from "react";
import Link from "next/link";
import StyleCss from "./Header.module.css"; 

const Header = () => {
  return (
    <nav className={StyleCss['header-container']}>
      <div className="flex justify-between items-center">
        <div className={StyleCss['header-logo']}>
          <span className="text-black">ZKU</span>School
        </div>

       
        <div className={StyleCss['header-links']}>
          <ul className={`${StyleCss['nav-list']} sm:flex sm:space-x-4`}>
            <li className={StyleCss['nav-item']}>
              <Link href="/">Home</Link>
            </li>
            <li className={StyleCss['nav-item']}>
              <Link href="/About">About Us</Link>
            </li>
            <li className={StyleCss['nav-item']}>
              <Link href="/classes">Classes</Link>
            </li>
            <li className={StyleCss['nav-item']}>
              <Link href="/teachers">Teachers</Link>
            </li>
            <li className={StyleCss['nav-item']}>
              <Link href="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
