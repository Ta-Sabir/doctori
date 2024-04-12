import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import {
  logo,
  calling,
  Message,
  time,
  Menu,
  closeMenu,
} from "../../assets/index";
import { navLinks } from "../../constants/index";
import styles from "../../style";
import { useState } from "react";
const Navbar = () => {
  const [ShowMenuphone, setShowMenuphone] = useState(true);
  const ShowMenuphoneClick = () => {
    setShowMenuphone(!ShowMenuphone);
  };
  return (
    // START NAVBAR COMPONENT
    <div className="navbar">
      <div className="top-navbar bg-[var(--main-color)] p-[8px]">
        <div className={`container ${styles.flexBetween}`}>
          <div
            className={`top-navbar-left ${styles.flex} gap-3 text-center mx-auto xl:mx-0`}
          >
            <div className={`phone ${styles.flex} gap-1 divide-x-[2px]`}>
              <figure>
                <img src={calling} alt="calling" className="w-[100%]" />
              </figure>
              <p className="text-[var(--white-color)] text-[14px] font-normal pl-[15px] cursor-pointer">
                +201091158519
              </p>
            </div>
            <div className={`email ${styles.flex} gap-1`}>
              <figure>
                <img src={Message} alt="Message" />
              </figure>
              <p className="text-[var(--white-color)] text-[14px] font-normal cursor-pointer">
                UIUX@elfayomy.com
              </p>
            </div>
          </div>
          <div
            className={`top-navbar-right ${styles.flex} gap-4 text-[var(--white-color)] hidden xl:flex`}
          >
            <Link
              to={
                "https://www.google.com/maps/place/%D9%82%D8%B3%D9%85+%D8%A3%D9%88%D9%84+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9%D8%8C+%D9%85%D8%B5%D8%B1%E2%80%AD/@29.9977487,30.9892936,12z/data=!3m1!4b1!4m6!3m5!1s0x14585124598fb2d1:0xc62ce20809bbdff7!8m2!3d29.9955479!4d31.0220422!16s%2Fg%2F11hdy1drxr?entry=ttu"
              }
              target="_blanck"
            >
              <p className="title text-[14px] font-normal border-l-2 pl-[12px] cursor-pointer">
                طريق التحرير، قسم أول 6 أكتوبر، قسم الجيزة
              </p>
            </Link>
            <p className="english text-[14px] font-normal border-l-2 pl-[12px] cursor-pointer">
              English
            </p>
            <Link to={"/contact"}>
              <p className="contact text-[14px] font-normal cursor-pointer">
                اتصل بنا
              </p>
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <div className="bg-[#fff]">
          <div className={`container ${styles.flexBetween} py-[4px]`}>
            <div className="navbar-brand">
              <Link to={"/"}>
                <figure>
                  <img src={logo} alt="logo" />
                </figure>
              </Link>
            </div>
            <div className={`navbar-menu ${styles.flex} gap-8 hidden md:flex`}>
              {navLinks.map((item) => {
                return (
                  <NavLink
                    to={item.id === "home" ? "/" : item.id}
                    key={item.id}
                    className={`relative ${styles.flex} gap-2 text-[var(--sec-color)] text-[15px] font-bold`}
                  >
                    {/* <div className="navbar-menu-icon text-[#2B2F4E] text-[19px]">
                      <span className={item.icon}></span>
                    </div> */}
                    <p> {item.title}</p>
                  </NavLink>
                );
              })}
            </div>
            <div className={`time-24 ${styles.flex} gap-2 hidden md:flex`}>
              <div className="time-icon">
                <figure>
                  <img src={time} alt="time-24" />
                </figure>
              </div>
              <div className={`time-text ${styles.flexColumn} gap-1`}>
                <p className="text-[12px] text-[#808D9E] font-normal">
                  مواعيد العمل
                </p>
                <p className="text-[12px] text-[var(--sec-color)] font-bold">
                  09:00 صباحًا إلى 18:00 مساءً
                </p>
              </div>
            </div>
            <div
              className="navbar-end sm:hidden"
              onClick={() => {
                ShowMenuphoneClick();
              }}
            >
              {ShowMenuphone && <img src={Menu} alt="Menu" />}
              {!ShowMenuphone && <img src={closeMenu} alt="closeMenu" />}
            </div>
          </div>
          <div
            className={`phoneMenu ${styles.flexColumn} items-center gap-[25px] w-[100%] h-[] bg-[var(--white-color)] absolute border-t-[1px] border-[#E2E2E2] z-[999] py-[35px] sm:hidden`}
            style={{
              top: ShowMenuphone ? "-660px" : "100px",
              opacity: ShowMenuphone ? "0" : "1",
            }}
          >
            {navLinks.map((item) => {
              return (
                <NavLink
                  to={item.id === "home" ? "/" : item.id}
                  key={item.id}
                  className={`relative ${styles.flex} gap-2 text-[var(--sec-color)] text-[15px] font-bold`}
                  onClick={() => {
                    setShowMenuphone(!ShowMenuphone);
                  }}
                >
                  <p> {item.title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
