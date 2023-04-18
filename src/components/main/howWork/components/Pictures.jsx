import howWorkImage from 'images/header/howworkimage.jpg'
import {HowWorkImages} from '../styles/Pictures.styled'

export const Pictures = () => {
    return (
        <HowWorkImages>
            <img src={howWorkImage} alt="howWorkImage" width={470}/>
        </HowWorkImages>
    )
}