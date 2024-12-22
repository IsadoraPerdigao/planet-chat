"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface UserProvider {
    user: string;
    setUser: Dispatch<SetStateAction<string>>;
}

interface Props {
    children: ReactNode;
}

const UserContext = createContext({} as UserProvider);

export function UserProvider({children} : Props) {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);