import { StaticImageData } from "next/image";
import React from "react";

export interface INavbar {
    activePage: string;
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showMobileMenu?: boolean; 
}

export interface ILayout extends Omit<INavbar, "setShowMobileMenu"> { 
    children: JSX.Element;
    activePage: string;
}

export interface ILogo {
    className?: string;
}

export interface IHeading {
    text: string; 
    variant?: "small" | "regular" | "large"; 
    color?: "dark" | "light";
    align?: "left" | "center" | "right";
    chelsea?: boolean;
    nova?: boolean;
    markit?: boolean;
    fill?: string;
    num?: string;
    sphere?: boolean
}

export interface IButton {
    text: string; 
    variant?: "fill" | "outline"; 
    align?: "left" | "center" | "right";
}

export interface ICertificates {
    img: StaticImageData;
    text: string;
    link: string;
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
    link: string;
    i?: number
}

export interface IChatBubble {
    text: string;
}

export interface IContact {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
    domRef: React.MutableRefObject<any>;
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILink {
    href: string;
    children: JSX.Element; 
}

export interface IInput {
    message: string; 
    changeValue: (e:React.ChangeEvent<HTMLInputElement>) => void ;
    showPopUp: boolean;
}

export interface IScreen {
    setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>; 
    showPopUp: boolean; 
    message: string; 
    setMessage: React.Dispatch<React.SetStateAction<string>>
}