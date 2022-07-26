import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import chelslogo from "../../../public/images/chelslogo.jpg";
import markitlogo from "../../../public/images/markitlogo.jpg";
import novalogo from "../../../public/images/novalogo.jpg";
import omegalogo from "../../../public/images/omegalogo.jpg";
import { ILayout } from "../../utils/interfaces";
import LinkComponent from "../elements/Link";
import Navbar from "./Navbar";

const Layout: React.FC<ILayout> = ({ activePage, children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showExtras, setShowExtras] = useState<boolean>(false);
  return (
    <div>
      <Navbar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        activePage={activePage}
      />
      {children}
      <ul
        style={{ transition: "top .3s ease-in-out" }}
        className={`fixed ${
          showMobileMenu ? "top-10 sm:top-20" : "-top-80"
        } py-5 w-full bg-white flex flex-col z-50 justify-between items-center uppercase text-xl font-medium`}
      >
        <LinkComponent href={"/"}>
          <li
            className={`cursor-pointer hover:text-primary mb-5 transition-colors ${
              activePage === "home" ? "text-primary" : "text-dark "
            }`}
            onClick={() => setShowMobileMenu(false)}
          >
            home
          </li>
        </LinkComponent>
        <div
          onMouseOver={() => setShowExtras(true)}
          onMouseOut={() => setShowExtras(false)}
          className="mb-5 grid place-items-center cursor-pointer"
        >
          <LinkComponent href={"/#works"}>
            <li
              className={`cursor-pointer hover:text-primary flex items-center transition-colors ${
                activePage === "work" ? "text-primary" : "text-dark "
              }`}
              onClick={() => {
                setShowMobileMenu(false);
                setShowExtras(false);
              }}
            >
              work
              <svg
                className="ml-1.5"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99961 8.99998C8.70755 9.00055 8.4245 8.89883 8.19961 8.71248L0.699612 2.46248C0.444341 2.25031 0.283811 1.94542 0.253336 1.61488C0.222862 1.28435 0.324939 0.955249 0.537112 0.699978C0.749285 0.444707 1.05417 0.284177 1.38471 0.253702C1.71524 0.223228 2.04434 0.325305 2.29961 0.537478L8.99961 6.13748L15.6996 0.737479C15.8275 0.633646 15.9746 0.556107 16.1325 0.509317C16.2904 0.462527 16.4561 0.44741 16.6198 0.464834C16.7836 0.482258 16.9424 0.531879 17.0869 0.610846C17.2314 0.689814 17.359 0.79657 17.4621 0.924978C17.5766 1.05351 17.6633 1.20429 17.7168 1.36788C17.7703 1.53147 17.7894 1.70435 17.773 1.87568C17.7565 2.04701 17.7049 2.2131 17.6213 2.36354C17.5377 2.51399 17.4239 2.64555 17.2871 2.74998L9.78711 8.78748C9.55576 8.94437 9.27849 9.01919 8.99961 8.99998Z"
                  fill={activePage === "work" ? "#7A81F3" : "rgb(67 67 67)"}
                />
              </svg>
            </li>
          </LinkComponent>
          <div
            style={{ transition: "max-height .2s ease-in-out" }}
            className={`capitalize overflow-hidden ${
              showExtras ? "mt-5 mb-5 max-h-64" : "max-h-0"
            }`}
          >
            <LinkComponent href={"/works/chelsea-redesign"}>
              <div
                className="flex items-center space-x-3 border-b"
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowExtras(false);
                }}
              >
                <figure className="w-10">
                  <Image src={chelslogo} alt="" />
                </figure>
                <p>Chelsea</p>
              </div>
            </LinkComponent>
            <LinkComponent href={"/works/nova-cinema"}>
              <div
                className="flex items-center space-x-3 border-b mt-3"
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowExtras(false);
                }}
              >
                <figure className="w-10">
                  <Image src={novalogo} alt="" />
                </figure>
                <p>Nova Cinema</p>
              </div>
            </LinkComponent>
            <LinkComponent href={"/works/markit"}>
              <div
                className="flex items-center space-x-3 border-b mt-3"
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowExtras(false);
                }}
              >
                <figure className="w-10">
                  <Image src={markitlogo} alt="" />
                </figure>
                <p>Markit</p>
              </div>
            </LinkComponent>
            <LinkComponent href={"/works/omega-bakery"}>
              <div
                className="flex items-center space-x-3 border-b mt-3"
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowExtras(false);
                }}
              >
                <figure className="w-10">
                  <Image src={omegalogo} alt="" />
                </figure>
                <p>Omega Bakery</p>
              </div>
            </LinkComponent>
          </div>
        </div>

        <Link href={"/about"}>
          <li
            className={`cursor-pointer hover:text-primary transition-colors ${
              activePage === "about" ? "text-primary" : "text-dark "
            }`}
            onClick={() => setShowMobileMenu(false)}
          >
            about
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Layout;
