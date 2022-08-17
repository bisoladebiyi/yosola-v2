import React, { useEffect, useState } from "react";
import { skills } from "../utils/constants";
import { IProgressBar, ISkillsProp } from "../utils/interfaces";


const ProgressBar: React.FC<IProgressBar> = ({ name, percentage, animate }) => {
  const [ componentPercentage, setComponentPercentage ] = useState<number>(0)
  useEffect(() => {
      const timer = setInterval(() => {
        if (componentPercentage < percentage && animate) {
          setComponentPercentage(componentPercentage => componentPercentage + 1);
        } else {
          clearInterval(timer);
      }
    }, 10);
   
  return () => clearInterval(timer);
  }, [animate, componentPercentage, percentage])

  return (
    <div className="flex justify-between">
      <div className="w-11/12 mr-5">
        <div className="h-4 bg-light-purp rounded-md overflow-hidden">
          <div
            style={{ width: `${componentPercentage}%` }}
            className="bg-primary h-full rounded-md"
          ></div>
        </div>
        <p className="text-primary-dark font-semibold text-base lg:text-lg">{name}</p>
      </div>
      <p className="text-primary font-semibold text-lg">{componentPercentage}%</p>
    </div>
  );
};

const Skills: React.FC<ISkillsProp> = ({ skillsRef, animate }) => {
  return (
    <div className="px-7 sm:px-24 lg:px-28 my-24">
      <h2 className="uppercase font-semibold text-2xl mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-7 md:gap-x-14 lg:gap-x-20 gap-y-7" ref={skillsRef}>
        {skills.map(({ name, percentage }, i) => (
          <ProgressBar
            animate={animate}
            name={name}
            percentage={percentage}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
