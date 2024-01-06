import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string; // the "?" makes the key optional
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}