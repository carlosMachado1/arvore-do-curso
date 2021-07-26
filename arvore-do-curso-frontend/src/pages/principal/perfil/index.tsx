import Head from "next/head"
import { useRouter } from "next/router"
import {BsPeopleCircle} from "react-icons/bs"
import styles from "../../../styles/pages/Perfil.module.css"
import { CadastroForm } from "../../../interfaces/cadastro"
import { useForm, SubmitHandler } from "react-hook-form"


export default function Perfil() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroForm>()
    const onSubmit: SubmitHandler<CadastroForm> = (data) => {
        console.log(data)
        router.push("/principal/cursos")
    }

    return(
        <div>
            <Head>
                <title>Perfil</title>
            </Head>
        
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.profileIcon}>
                        <BsPeopleCircle size = "60px" />
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
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}