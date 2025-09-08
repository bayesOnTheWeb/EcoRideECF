"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string;
  type: "submit" | "reset" | "button";
  style: "mainButtonClassName" | "secondButtonClassName";
  redirect?: string;
}

export default function Button({ label, type, style, redirect }: ButtonProps) {
  //Creation des styles de bouttons
  const mainButtonClassName =
    "bg-greenEcoRide text-white py-0.5 p-4 px-4 rounded-full";
  const secondButtonClassName =
    "bg-lightBrunEcoRide text-blackEcoRide rounded-full py-0.5 px-4 p-4 ";

  //Choix du style via mapping
  const styleMapping = {
    mainButtonClassName: mainButtonClassName,
    secondButtonClassName: secondButtonClassName,
  };

  const className = styleMapping[style];

  const router = useRouter();

  function redirectClick() {
    if (redirect) router.push(redirect);
  }

  return (
    <button className={className} type={type} onClick={redirectClick}>
      {label}
    </button>
  );
}
