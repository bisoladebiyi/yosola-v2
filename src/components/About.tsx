import Image from "next/image";
import React from "react";
import Heading from "./elements/Heading";
import yossee from "../../public/images/yosseeAbout.png";
import Button from "./elements/Button";

const About = () => {
  return (
    <div className="pt-32">
      <Heading text={"A little about myself"} />
      <div className="flex justify-between px-32 mt-10 items-end">
        <div className="w-medium">
          <Image src={yossee} alt="Yosola" />
          <p className="text-lg font-semibold text-black italic mt-5 mb-3">“People ignore design that ignores people.” <span className="block font-medium mt-3">-Frank Chimero</span></p>
          <Button align="center" variant="outline" text={"View my resume"} />
        </div>
        <div className="w-1/2">
          <div className="flex space-x-3 items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <p className="text-primary text-lg font-semibold">
              I am currently available for work
            </p>
          </div>
          <p className="text-dark font-semibold text-xl mt-7">
            My name is Adetimilehin Adeyosola, yossee for short and I specialize
            in creating better experience for others through design.<br /><br />My journey
            into UI/UX design began December 2020, taking the google UX
            specialization course at coursera where I learnt a lot about what it
            takes to be a UX designer.<br /><br />As a designer, I use my curiosity,
            emapthy and technical skills to find a way to humanize technology. I
            enjoy using my skills to empower people and create digital
            experiences that makes life easier. My skill set is broad and ranges
            from design thinking, user flow, wireframes and prototypes to final
            visual design.<br /><br />Outside of work, I am an avid football supporter(a
            chelsea fan), love watching movies, reading novels and taking
            strolls
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
