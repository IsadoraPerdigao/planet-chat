"use client"

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MessagesList } from "@/components/messagesList";

export default function ChatPage () {
    return (
        <div className=" items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="flex flex-col gap-12 row-start-2 w-[90%] justify-center mt-8">
            <MessagesList />
          </main>
          <Footer />
        </div>
      );
}