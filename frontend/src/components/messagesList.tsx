"use client"

import { useUserContext } from "@/context/userContext"

export const MessagesList = () => {
    const { user } = useUserContext();

    return (
        <ol className={`flex ${!user ? "justify-start" : "justify-end"} w-full`}>
            <li className={`flex ${!user ? "justify-start bg-gray-200" : "justify-end bg-green-200"} w-[70%] border p-2 rounded`}>
                <div className="w-full">
                    <p>Nome</p>
                    <div className="flex justify-between">
                        <p>Mensagem</p>
                        <span>Horário</span>
                    </div>
                </div>
            </li>
        </ol>
    )
}