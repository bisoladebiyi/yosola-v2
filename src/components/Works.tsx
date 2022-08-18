import Image from "next/image";
import React, { useState } from "react";
import { works } from "../utils/constants";
import { IWorks } from "../utils/interfaces";
import Heading from "./elements/Heading";
import LinkComponent from "./elements/Link";

const Works = () => {
  const Work: React.FC<IWorks> = ({
    bg,
    img,
    title,
    desc,
    color,
    swap,
    link,
    i,
  }) => {
    const [iconAnimate, setIconAnimate] = useState<boolean>(false);
    return (
      <LinkComponent href={link}>
        <div
          key={i}
          style={{
            background: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={`rounded-xl text-white flex-col-reverse flex lg:flex-row ${
            swap && "flex-row-reverse"
          } justify-between items-center pt-10 px-3 sm:px-6 shadow-2xl ${
            i !== works.length - 1 ? "mb-14 sm:mb-24" : ""
          }`}
        >
          <div className="pb-6 lg:pb-0 lg:w-1/3">
            <p className="text-center font-medium text-xl sm:text-2xl">
              {desc}
            </p>
            <LinkComponent href={link}>
              <p
                onMouseEnter={() => setIconAnimate(true)}
                onMouseOut={() => setIconAnimate(false)}
                className="text-center font-medium text-2xl sm:text-3xl mt-2 lg:mt-5 flex items-center space-x-2 justify-center cursor-pointer"
                style={{ color }}
              >
                Read case study
                <svg
                  className={`w-10 ${
                    iconAnimate ? "-translate-y-1 translate-x-1" : ""
                  } transition-transform`}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.0001 14.1C36.0001 13.5696 35.7894 13.0609 35.4143 12.6858C35.0393 12.3107 34.5306 12.1 34.0001 12.1L18.0001 12C17.4697 12 16.961 12.2107 16.5859 12.5858C16.2108 12.9609 16.0001 13.4696 16.0001 14C16.0001 14.5304 16.2108 15.0391 16.5859 15.4142C16.961 15.7893 17.4697 16 18.0001 16H29.1201L12.5801 32.58C12.3927 32.7659 12.2439 32.9871 12.1423 33.2308C12.0408 33.4746 11.9885 33.736 11.9885 34C11.9885 34.264 12.0408 34.5254 12.1423 34.7692C12.2439 35.0129 12.3927 35.2341 12.5801 35.42C12.766 35.6075 12.9872 35.7562 13.231 35.8578C13.4747 35.9593 13.7361 36.0116 14.0001 36.0116C14.2641 36.0116 14.5256 35.9593 14.7693 35.8578C15.013 35.7562 15.2342 35.6075 15.4201 35.42L32.0001 18.84V30C32.0001 30.5304 32.2108 31.0391 32.5859 31.4142C32.961 31.7893 33.4697 32 34.0001 32C34.5306 32 35.0393 31.7893 35.4143 31.4142C35.7894 31.0391 36.0001 30.5304 36.0001 30V14.1Z"
                    fill={color}
                  />
                </svg>
              </p>
            </LinkComponent>
          </div>
          <div className="w-11/12">
            <p
              className={`text-center text-4xl sm:text-5xl md:text-6xl font-semibold ${
                i === works.length - 1 ? "" : "md:-mb-7"
              }`}
            >
              {title}
            </p>
            <div className="w-full">
              <Image src={img} alt={title} />
            </div>
          </div>
        </div>
      </LinkComponent>
    );
  };
  return (
    <div id="works">
      <Heading text="What I do" align="center" />
      <div className="mt-10">
        {works.map(({ bg, img, title, desc, color, swap, link }, i) => (
          <Work
            i={i}
            bg={bg}
            img={img}
            title={title}
            color={color}
            desc={desc}
            swap={swap}
            link={link}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
