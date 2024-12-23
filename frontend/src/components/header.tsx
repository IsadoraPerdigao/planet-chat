"use client";

import Image from "next/image";
import logo from "../assets/planetTechLogo.jpeg";
import { useUserContext } from "@/context/userContext";

export const Header = () => {
  const { user, setUser } = useUserContext();

  return (
    <header className="flex items-center justify-between w-[100%] bg-orange-400 shadow-lg">
      <Image src={logo} alt="Planet Tech logo" width={150} />
      <h1 className="font-sans font-bold text-2xl text-blue-900 mr-16">
        Planet Chat
      </h1>
      <button
        className="mr-4"
        disabled={user ? false : true}
        onClick={() => {
          setUser("");
          localStorage.clear();
        }}
      >
        Sair
      </button>
    </header>
  );
};
