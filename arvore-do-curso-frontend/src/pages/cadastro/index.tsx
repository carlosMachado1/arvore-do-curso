import Head from "next/head"
import Link from "next/link"
import {CadastroForm} from "../../interfaces/cadastro"
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
                    <div>
                        <label>
                            <input {...register("nome", {required: true, pattern: /[\w]+/})} 
                            placeholder="Digite seu nome..."/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}