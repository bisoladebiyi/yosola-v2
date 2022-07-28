import { StaticImageData } from "next/image";

export interface INavbar {
    activePage: string;
}

export interface ILayout extends INavbar { 
    children: JSX.Element;
}

export interface ILogo {
    className?: string;
}

export interface IHeading {
    text: string; 
    variant?: "small" | "regular" | "large"; 
    color?: "dark" | "light";
    align?: "left" | "center" | "right";
}

export interface IButton {
    text: string; 
    variant?: "fill" | "outline"; 
    align?: "left" | "center" | "right";
}

export interface ICertificates {
    img: StaticImageData;
    text: string;
}

export interface ISkills {
    name: string;
    percentage: number;
}

export interface ISkillsProp {
    skillsRef: (node?: Element | null | undefined) => void;
    animate: boolean;
}
  
export interface IProgressBar extends ISkills, Omit<ISkillsProp, "skillsRef"> {}

export interface IWorks {
    bg: StaticImageData;
    img: StaticImageData;
    title: string;
    desc: string;
    color: string;
    swap?: boolean;
}

export interface IChatBubble {
    text: string;
}