import Head from "next/head"
import {SideMenu} from "../../../components/sideMenu"
import {Tab} from "../../../components/tab"
import {Cadastro} from "../../../components/cadastro"
import styles from "../../../styles/pages/Perfil.module.css"


export default function Perfil() {
    return(
        <div>
            <Head>
                <title>Perfil</title>
            </Head>
        
            <div className = {styles.root}>
                <div className = {styles.navigator}>
                    <SideMenu nome = "Carlos Machado" />
                </div>

                <div className = {styles.data}>
                    <Tab component = {<Cadastro />} />
                </div>
            </div>
        </div>
    )
}