import { useRouter } from "next/router"
import { BsPeopleCircle } from "react-icons/bs"
import axios, { AxiosRequestConfig } from "axios"
import styles from "../styles/components/Cadastro.module.css"
import { CadastroForm } from "../interfaces/cadastro"
import { useForm, SubmitHandler } from "react-hook-form"

async function SendData(data: CadastroForm) {
    const { nome, email, senha } = data
    let users
    const options: AxiosRequestConfig = {
        url: "http://localhost:5000/login",
        method: "POST",
        data: {
            email: email,
            password: senha,
            name: nome,
        },
    }

    await axios(options)
        .then((response) => {
            users = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return users
}

export function Cadastro() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<CadastroForm>()
    const onSubmit: SubmitHandler<CadastroForm> = (data) => {
        console.log(data)
        router.push("/principal/cursos")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.profileIcon}>
                    <BsPeopleCircle size="60px" />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="nome" className={styles.label}>
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome..."
                        className={styles.input}
                        {...register("nome", {
                            required: true,
                        })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu email..."
                        className={styles.input}
                        {...register("email", {
                            required: true,
                        })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="senha" className={styles.label}>
                        Senha
                    </label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha..."
                        className={styles.input}
                        {...register("senha", {
                            required: true,
                        })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="senha" className={styles.label}>
                        Confirmar Senha
                    </label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Confirme sua senha..."
                        className={styles.input}
                        {...register("confirmarSenha", {
                            required: true,
                        })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <button type="submit" className={styles.button}>
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}
