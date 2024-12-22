"use client"

import { useUserContext } from "@/context/userContext"
import axios from "axios";
import { useEffect, useState } from "react";

interface Message {
    id: string;
    content: string;
    sender: string;
    timestamp: string;
}

export const MessagesList = () => {
    const { user } = useUserContext();
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        //Buscar mensagens iniciais com Axios
    const fetchMessages = async () => {
        try {
          const response = await axios.get<Message[]>("http://localhost:8080/messages");
          setMessages(response.data);
        } catch (error) {
          console.error("Erro no GET das mensagens:", error);
        }
      };
  
      fetchMessages();
  
      //Conectar ao WebSocket
      const socket = new WebSocket("ws://localhost:8080");
  
      socket.onopen = () => {
        console.log("Conectado ao WebSocket");
      };
  
      socket.onmessage = (event) => {
        const newMessage: Message = JSON.parse(event.data);

        if (newMessage.content) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      };
  
      socket.onerror = (error) => {
        console.error("Erro no WebSocket:", error);
      };
  
      socket.onclose = () => {
        console.log("WebSocket desconectado");
      };
  
      //Cleanup ao desmontar o componente
      return () => {
        socket.close();
      };
    }, []);
    

    return (
        <ol className={`flex ${!user ? "justify-start" : "justify-end"} w-full flex-col gap-2`}>
            {messages.map((message) => (
                <li key={message.id} className={`flex ${user == message.sender ? "justify-end bg-green-200" : "justify-start bg-gray-200" } w-[70%] border p-2 rounded`}>
                    <div className="w-full">
                        <strong>{message.sender}:</strong>
                        <div className="flex justify-between">
                            <p>{message.content}</p>
                            <small>{new Date(message.timestamp).toLocaleString("pt-BR")}</small>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    )
}