import Image from "next/image"
import logo from "../assets/planetTechLogo.jpeg"

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-[100%] bg-orange-500 shadow-lg">
            <Image src={logo} alt="Planet Tech logo" width={150}/>
            <h1 className="font-sans font-bold text-2xl text-blue-900 mr-16">Planet Chat</h1>
            <button className="mr-4">Sair</button>
        </header>
    )
}