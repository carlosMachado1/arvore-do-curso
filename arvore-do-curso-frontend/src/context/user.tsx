import { createContext, useContext, useState } from "react"
import DadosGlobais from "../interfaces/dadosGlobais"

export const UserContext = createContext({})

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState({
        nome: "",
        email: "",
        disciplinas: [],
        cursos: [],
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useGlobal() {
    const context = useContext(UserContext)
    const { user, setUser } = context
    return { user, setUser }
}
