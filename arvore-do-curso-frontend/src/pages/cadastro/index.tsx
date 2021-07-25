import Head from "next/head"
import Link from "next/link"
import { CadastroForm } from "../../interfaces/cadastro"
import { useForm, SubmitHandler } from "react-hook-form"

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroForm>()
    const onSubmit: SubmitHandler<CadastroForm> = (data) => console.log(data)
    return (
        <div>
            <Head>
                <title>Cadastro de Usuário</title>
            </Head>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome
                        <input
                            {...register("nome", { required: true })}
                            placeholder="Digite seu nome..."
                            type="text"
                        />
                    </label>

                    <label>
                        Email
                        <input
                            {...register("email", {
                                required: true,
                            })}
                            placeholder="Digite seu email..."
                            type="text"
                        />
                    </label>

                    <label>
                        Senha
                        <input
                            {...register("nome", {
                                required: true,
                            })}
                            placeholder="Digite sua senha..."
                            type="password"
                        />
                    </label>

                    <label>
                        Confimação de senha
                        <input
                            {...register("nome", {
                                required: true,
                            })}
                            placeholder="Digite a senha novamente..."
                            type="password"
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}
