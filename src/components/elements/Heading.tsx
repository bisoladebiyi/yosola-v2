import Image from "next/image";
import React from "react";
import { IHeading } from "../../utils/interfaces";
import HeadingIcon from "./HeadingIcon";
import spherehead from "../../../public/images/Sphere.jpg"

const Heading: React.FC<IHeading> = ({
  text,
  variant,
  color,
  align,
  chelsea,
  nova,
  markit,
  fill,
  num,
  sphere
}) => {
  return (
    <div>
      {chelsea ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-center text-xl sm:text-3xl justify-center font-semibold px-3 py-2 border-l-4 border-primary-dark inline-block">
            {text}
          </p>
        </div>
      ) : nova ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-center text-xl sm:text-3xl justify-center font-semibold relative px-3 py-2 novaHeading inline-block">
            {text}
          </p>
        </div>
      ) : markit ? (
        <div className="flex border-b">
          <HeadingIcon className="" fill={fill} />
          <div className="mb-4 -ml-10">
            <p className="text-center font-bold text-2xl" style={{ color: fill }}>{num}</p>
            <p className="text-center text-xl sm:text-3xl justify-center text-gray-700 font-semibold relative">
              {text}
            </p>
          </div>
        </div>
      ) : sphere ? (
        <div className="flex items-center justify-center">
          <figure className="w-12 sm:w-14">
            <Image src={spherehead} alt="" />
          </figure>
        <p className="text-center text-xl sm:text-3xl justify-center font-semibold relative px-3 py-2 inline-block -left-12 sm:-left-14 -mr-14">
          {text}
        </p>
      </div>
      ) 
      :(
        <div className={`text-${align}`}>
          <p
            className={`${color === "light" ? "text-light" : "text-dark"} ${
              variant === "large"
                ? "text-3xl sm:text-5xl"
                : variant === "small"
                ? "text-xl sm:text-3xl"
                : "text-3xl sm:text-4xl"
            } font-semibold headingStyle relative inline-block`}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Heading;
