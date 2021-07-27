import { createContext, useState } from "react"
import DadosGlobais from "../interfaces/dadosGlobais"
import axios, { AxiosRequestConfig } from "axios"

export const UserContext = createContext({})

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState<DadosGlobais>()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
