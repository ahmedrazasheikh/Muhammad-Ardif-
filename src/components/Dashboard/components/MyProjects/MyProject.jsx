import {TitleProject} from './components/Title'
import { Project } from './components/Projects'

export const MyProjects = () => {
    return (
        <div className="myprojects">
            <TitleProject/>
            <Project/>
        </div>
    )
}