import Head from "next/head"
import Link from "next/link"
import axios, { AxiosRequestConfig } from "axios"
import { CadastroForm } from "../../interfaces/cadastro"
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "../../styles/pages/Cadastro.module.css"
import { useRouter } from "next/router"
import UserProvider, { UserContext } from "../../context/user"
import { useContext } from "react"

async function SendData(data: CadastroForm) {
    const { nome, email, senha } = data
    let users
    const options: AxiosRequestConfig = {
        url: "http://localhost:5000/users",
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

export default function Cadastro() {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroForm>()
    const onSubmit: SubmitHandler<CadastroForm> = async (data) => {
        if (data.senha === data.confirmarSenha) {
            let user = await SendData(data)
            if (user == "") {
                router.push("/principal/cursos")
            }
        }
    }
    return (
        <UserProvider>
            <div>
                <Head>
                    <title>Cadastro de Usuário</title>
                </Head>
                <div className={styles.container}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
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
                                Cadastrar
                            </button>
                        </div>

                        <div className={styles.more}>
                            <p className={styles.moreText}>
                                Já possui uma conta?{" "}
                                <Link href="/">
                                    <a className={styles.moreLink}>Login</a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </UserProvider>
    )
}
