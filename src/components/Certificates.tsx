import Image from "next/image";
import React from "react";
import { ICertificates } from "../utils/interfaces";
import cousera from "../../public/images/Coursera Certificate.png";
import clarats from "../../public/images/Clarats Certificate.png";
import google from "../../public/images/Google Certificate.png";
import udemy from "../../public/images/Udemy Certificate.png";

const certArray: ICertificates[] = [
  {
    img: cousera,
    text: "Google UX Design",
    link: "https://drive.google.com/file/d/1D9eR3z-FTPGhxTB3cyxU6fxGT5a8oTZX/view?usp=sharing",
  },
  {
    img: clarats,
    text: "Fundamentals of Graphic Design",
    link: "https://drive.google.com/file/d/1QLk1kTGu4TJQGAR0QvtM3oPY3Rd3qw2s/view?usp=sharing",
  },
  {
    img: google,
    text: "Fundamentals of Digital Marketing",
    link: "https://drive.google.com/file/d/128EUZAdQ0yJsdWpWhGbk7Gy4OjgHe-ff/view?usp=sharing",
  },
  {
    img: udemy,
    text: "Proofread like a pro",
    link: "https://drive.google.com/file/d/11fk00BHjpcGcoGSBUWI5iHGgnPtX8HuL/view?usp=sharing",
  },
];
const Certificates = () => {
  return (
    <div className="px-7 sm:px-24 lg:px-28 mt-24">
      <h2 className="uppercase font-semibold text-2xl">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4">
        {certArray.map(({ text, img, link }, index) => (
          <a href={link} key={text} target="_blank" rel="noreferrer">
            <div>
              <Image src={img} alt={text} />
              <p className="text-center font-medium text-base lg:text-lg">
                {text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
