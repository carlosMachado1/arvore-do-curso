import { SideMenu } from "../components/sideMenu"
import { Content } from "../components/content"
import { Tab } from "../components/tab"
import { Cadastro } from "../components/cadastro"
import { EditCourse } from "../components/editCourse"
import { EditDisciplina } from "../components/editDisciplina"
import { ExcluirCurso } from "../components/excluirCurso"

export default function Teste() {
    const cursos = [
        "Engenharia de Computação",
        "Engenharia Civil",
        "Engenharia de Software",
    ]

    return (
        <div>
            <div>
                <EditCourse />
            </div>
        </div>
    )
}
