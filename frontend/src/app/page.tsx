"use client"

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RegisterForm } from "@/components/registerForm";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center h-full justify-center p-6">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
