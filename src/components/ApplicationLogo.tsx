import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/yosseeLogo.png";
import { ILogo } from "../utils/interfaces";

const ApplicationLogo: React.FC<ILogo> = ({ className }) => {
  return (
    <Link href="/" passHref><div>
      <svg
        className={`${className} cursor-pointer`}
        viewBox="0 0 44 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35.9143"
          cy="9.17143"
          r="6.94286"
          fill="#7A81F3"
          stroke="#7A81F3"
          strokeWidth="1.54286"
        />
        <path
          d="M18.5597 2.50673C18.3794 2.1767 18.0332 1.97143 17.6571 1.97143H3C2.62116 1.97143 2.27299 2.17967 2.09379 2.51344C1.91458 2.84721 1.93335 3.25247 2.14265 3.56825L16.6286 25.4242V48C16.6286 48.5681 17.0891 49.0286 17.6571 49.0286H29.7429C30.3109 49.0286 30.7714 48.5681 30.7714 48V25.1143C30.7714 24.9419 30.7281 24.7723 30.6454 24.621L18.5597 2.50673Z"
          stroke="#434343"
          strokeWidth="2.05714"
          strokeLinejoin="round"
        />
      </svg>
    </div></Link>
  );
};

export default ApplicationLogo;
