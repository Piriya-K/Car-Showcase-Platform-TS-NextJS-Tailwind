"use client"; //a "use-client" directive that turns the component into a client-side component. NextJS is server-side rendering.

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick, btnType
}: CustomButtonProps) => {
  return (
    <button
      disabled={false} //the button can have multiple states
      type={btnType || "button"} //the button have many types
      className={`custom-btn ${containerStyles}`} //will have multiple class names
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
