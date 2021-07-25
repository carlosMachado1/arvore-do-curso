import { SideMenu } from "../components/sideMenu"
import { Content } from "../components/content"
import { Tab } from "../components/tab"

export default function Teste() {
    return (
        <div>
            <div>
                <Tab component={<Content />} />
            </div>
        </div>
    )
}
