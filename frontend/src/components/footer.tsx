"use client"

import Image from "next/image"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import location from "../assets/locationPin.svg"

export const Footer = () => {
    return (
        <div className="flex items-center justify-between w-[100%] p-4 bg-blue-950">
            <div className="flex gap-2 text-gray-300 text-sm items-center">
                <Image src={phone} alt="Phone icon"/>
                <p>(31) 2125-2800</p>
            </div>
            <div className="flex gap-2 text-gray-300 text-sm items-center">
                <Image src={mail} alt="Envelope icon"/>
                <p>contato@planetfone.com.br</p>
            </div>
            <div className="flex gap-2 text-gray-300 text-sm items-center"> 
                <Image src={location} alt="Pin icon" />
                <div>
                    <p>Rua José Rodrigues Pereira, 514</p>
                    <p>Belo Horizonte, Minas Gerais, Brasil</p>
                </div>
            </div>
        </div>
    )
}