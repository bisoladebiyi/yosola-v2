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
    variant?: "regular" | "large"; 
    color?: "dark" | "light"
}

export interface IButton {
    text: string; 
    variant?: "fill" | "outline"; 
    align?: "left" | "center" | "right"
}

export interface ICertificates {
    img: StaticImageData;
    text: string
}