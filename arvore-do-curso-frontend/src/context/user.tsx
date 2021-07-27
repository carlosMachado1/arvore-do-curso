import { createContext, useContext, useState, ReactNode } from "react"

interface UserContextData { 
    nome: string
    email: string
    id: string
    handleNome: (nome: string) => void
    handleEmail: (email: string) => void
    handleID: (id: string) => void
}

interface UserProviderProps {
    children: ReactNode
}


export const UserContext = createContext({} as UserContextData)

export default function UserProvider({ children }: UserProviderProps) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [id, setID] = useState("")

    function handleNome(nome: string) {
        setNome(nome)
    }

    function handleEmail(email: string) {
        setEmail(email)
    }

    function handleID(id: string) {
        setID(id)
    }

    return (
        <UserContext.Provider value={{ nome, email, id, handleNome, handleEmail, handleID }}>
            {children}
        </UserContext.Provider>
    )
}

export function useGlobal() {
    const context = useContext(UserContext)
    const { nome, email, id, handleNome, handleEmail, handleID } = context
    return { nome, email, id, handleNome, handleEmail, handleID  }
}
