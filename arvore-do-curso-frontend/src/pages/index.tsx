import Head from "next/head"
import Login from "../interfaces/login"
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "../styles/pages/Home.module.css"

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Login>()
    const onSubmit: SubmitHandler<Login> = (data) => console.log(data)

    return (
        <div>
            <Head>
                <title>Página de Login</title>
            </Head>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>
                            Email
                            <input
                                type="email"
                                placeholder = "Digite um email..."
                                {...register("usuario", {
                                    required: true,
                                    pattern:
                                        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
                                })}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Senha
                            <input
                                type="password"
                                placeholder="Digite uma senha..."
                                {...register("senha", { required: true })}
                            />
                        </label>
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p>Não possui cadastro?</p>
                <p>
                    <span>Cadastre-se aqui</span>
                </p>
            </div>
        </div>
    )
}
