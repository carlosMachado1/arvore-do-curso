import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Login from "../interfaces/login"
import axios, { AxiosRequestConfig } from "axios"
import { useForm, SubmitHandler, set } from "react-hook-form"
import styles from "../styles/pages/Home.module.css"
import UserProvider, { useGlobal } from "../context/user"

async function SendData(data: Login) {
    const { usuario, senha } = data
    let users
    const options: AxiosRequestConfig = {
        url: "http://localhost:5000/login",
        method: "POST",
        data: {
            email: usuario,
            password: senha,
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

export default function Home() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Login>()
    const onSubmit: SubmitHandler<Login> = async (data) => {
        console.log(data)
        const login = await SendData(data)
        console.log(login)
        if (login.id != "") {
            localStorage.setItem("id", login.user.id)
            localStorage.setItem("nome", login.user.name)
            router.push("/principal/cursos")
        }

    }

    return (
        <UserProvider>
            <div>
                <Head>
                    <title>Página de Login</title>
                </Head>

                <div className={styles.container}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Digite um email..."
                                className={styles.input}
                                {...register("usuario", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Digite uma senha..."
                                className={styles.input}
                                {...register("senha", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <button type="submit" className={styles.button}>
                                Login
                            </button>
                        </div>

                        <div className={styles.more}>
                            <p className={styles.moreText}>
                                Não possui cadastro?{" "}
                                <Link href="/cadastro">
                                    <a className={styles.moreLink}>
                                        Cadastre-se
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </UserProvider>
    )
}
