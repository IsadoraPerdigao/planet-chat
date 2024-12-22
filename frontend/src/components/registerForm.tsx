export const RegisterForm = () => {
    return (
       <div>
            <h1 className="text-blue-950 bg-gray-200 w-full text-center p-2 rounded-t font-semibold text-lg">Adicione uma nova mensagem</h1>
            <form action="" className=" bg-gray-200 rounded-b flex flex-col gap-3 p-2">
                <input type="text" name="userName" id="userName" placeholder="Insira seu nome" className="border-b p-2 rounded" />
                <textarea name="message" id="message" rows={16} cols={46} placeholder="Insira aqui sua mensagem" className="rounded border p-2"></textarea>
                <button type="submit">Enviar</button>
            </form>
       </div>
    )
}