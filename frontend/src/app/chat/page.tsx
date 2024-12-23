"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MessageForm } from "@/components/messageForm";
import { MessagesList } from "@/components/messagesList";
import { useState } from "react";

export default function ChatPage() {
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const handleNewMessage = () => {
    setTriggerUpdate(true); // Aciona atualização na lista
  };

  return (
    <div className="flex flex-col items-center justify-items-center justify-between font-[family-name:var(--font-geist-sans)] min-h-screen">
      <Header />
      <main className="flex flex-col flex-grow gap-12 row-start-2 w-[90%] justify-center">
        <MessagesList
          setTriggerUpdate={setTriggerUpdate}
          triggerUpdate={triggerUpdate}
        />
        <MessageForm onMessageSent={handleNewMessage} />
      </main>
      <Footer />
    </div>
  );
}
