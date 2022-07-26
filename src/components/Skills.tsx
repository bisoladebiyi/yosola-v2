import React, { useEffect, useState } from "react";
import { IProgressBar, ISkills, ISkillsProp } from "../utils/interfaces";

const skills: ISkills[] = [
  {
    name: "Design thinking",
    percentage: 90,
  },
  {
    name: "UI Design",
    percentage: 100,
  },
  {
    name: "User research",
    percentage: 70,
  },
  {
    name: "Prototyping",
    percentage: 100,
  },
  {
    name: "Coding",
    percentage: 20,
  },
  {
    name: "Information architecture",
    percentage: 100,
  },
  {
    name: "Design strategy",
    percentage: 50,
  },
  {
    name: "Wireframing",
    percentage: 100,
  },
  {
    name: "Analytics",
    percentage: 50,
  },
  {
    name: "Web design",
    percentage: 90,
  },
  {
    name: "Mobile design",
    percentage: 100,
  },
  {
    name: "Graphic design",
    percentage: 60,
  },
];


const ProgressBar: React.FC<IProgressBar> = ({ name, percentage, animate }) => {
  const [ componentPercentage, setComponentPercentage ] = useState(0)
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
        <p className="text-primary-dark font-semibold text-lg">{name}</p>
      </div>
      <p className="text-primary font-semibold text-lg">{componentPercentage}%</p>
    </div>
  );
};

const Skills: React.FC<ISkillsProp> = ({ skillsRef, animate }) => {
  return (
    <div className="px-28 my-24">
      <h2 className="uppercase font-semibold text-2xl mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-x-20 gap-y-7" ref={skillsRef}>
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
