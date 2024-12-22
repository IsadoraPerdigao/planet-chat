"use client";

import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegisterForm = () => {
  const { setUser } = useUserContext();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  return (
    <div>
      <form
        className="rounded flex gap-6 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          setUser(inputValue);
          router.push("/chat")
        }}
      >
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Insira seu nome"
          className="border-b p-2 rounded"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="bg-orange-400 rounded p-2">
          Entrar
        </button>
      </form>
    </div>
  );
};
