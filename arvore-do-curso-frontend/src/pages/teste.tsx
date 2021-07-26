import { SideMenu } from "../components/sideMenu"
import { Content } from "../components/content"
import { Tab } from "../components/tab"
import {Cadastro} from "../components/cadastro"

export default function Teste() {
    return (
        <div>
            <div>
                <Tab component = {<Cadastro />}/>
            </div>
        </div>
    )
}
