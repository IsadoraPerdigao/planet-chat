"use client";

import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

interface MessageProps {
  triggerUpdate: boolean;
  setTriggerUpdate: Dispatch<SetStateAction<boolean>>;
}

export const MessagesList = ({
  triggerUpdate,
  setTriggerUpdate,
}: MessageProps) => {
  const user = localStorage.getItem("user");
  const [messages, setMessages] = useState<Message[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null); // Ref para o último item da lista

  //Buscar mensagens iniciais com Axios
  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>(
        "http://localhost:8080/messages"
      );

      if(response.data.length > 0) {
        setMessages(response.data);
      }
    } catch (error) {
      console.error("Erro no GET das mensagens:", error);
    }
  };

  useEffect(() => {
    fetchMessages();

    //Conectar ao WebSocket
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Conectado ao WebSocket");
    };

    socket.onmessage = (event) => {
      const messagesList: Message[] = JSON.parse(event.data);

      setMessages((prevMessages) => {
        const existingIds = prevMessages.map((msg) => msg.id);
        const newMessages = messagesList.filter(
          (msg) => !existingIds.includes(msg.id)
        );
        return [...prevMessages, ...newMessages];
      });
    };

    socket.onerror = (error) => {
      console.log("Erro no WebSocket:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket desconectado");
    };

    //Cleanup ao desmontar o componente
    return () => {
      socket.close();
    };
  }, []);

  // Atualizar quando triggerUpdate mudar (após POST bem-sucedido)
  useEffect(() => {
    if (triggerUpdate) {
      fetchMessages();
      setTriggerUpdate(false); // Resetar o trigger
    }
  }, [triggerUpdate]);

  // useEffect para rolar até a última mensagem
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" }); // Rola para o último item
    }
  }, [messages]); // Esse effect roda sempre que as mensagens mudam

  return (
    <ol
      className={`flex w-full flex-col gap-2 overflow-auto h-[350px] overflow-y-auto`}
    >
      {messages.length > 0 ? messages.map((message) => (
        <li
          key={message.id}
          className={`flex ${
            user === message.sender ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`w-[80%] border p-2 rounded ${
              user === message.sender ? "bg-green-200" : "bg-gray-200"
            }`}
          >
            <strong>{message.sender}:</strong>
            <div className="flex justify-between">
              <p>{message.content}</p>
              <small>
                {new Date(message.timestamp).toLocaleString("pt-BR")}
              </small>
            </div>
          </div>
        </li>
      )) : <h1 className="m-auto font-bold text-lg">Ainda não temos mensagens por aqui</h1> }
      <div ref={endOfMessagesRef} />
    </ol>
  );
};
