import axios from "axios";
import { useState } from "react";

export const MessageForm = ({
  onMessageSent,
}: {
  onMessageSent: () => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const loggedUser = localStorage.getItem("user");

  async function handleSubmit() {
    try {
      await axios.post("http://localhost:8080/messages", {
        content: inputValue,
        sender: loggedUser,
      });

      setInputValue("");
      onMessageSent(); // Notifica que uma nova mensagem foi enviada
    } catch (error) {
      console.log(`Erro ${error} ao tentar enviar a mensagem`);
    }
  }

  return (
    <form
      className="border p-2 bg-gray-200 rounded"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <textarea
        name="message"
        id="message"
        rows={2}
        className="border rounded w-full p-2"
        placeholder="Digite aqui sua mensagem..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></textarea>
      <button
        type="submit"
        className="bg-green-500 rounded p-2 text-white font-semibold"
      >
        Enviar
      </button>
    </form>
  );
};
