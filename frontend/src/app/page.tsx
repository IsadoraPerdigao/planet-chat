"use client"

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RegisterForm } from "@/components/registerForm";
import Image from "next/image";
import webChat from "../assets/webChat.jpeg"

export default function Home() {
  return (
    <div className=" flex flex-col justify-between items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-12 row-start-2 items-center h-full justify-center p-8">
        <RegisterForm />
        <Image src={webChat} alt="Woman talking on the phone and using computer" width={450}/>
      </main>
      <Footer />
    </div>
  );
}
