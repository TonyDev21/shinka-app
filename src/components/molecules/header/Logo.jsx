import { Link } from "react-router-dom"
import guimarLogo from '../../../assets/logo_color_white.svg'

const Logo = () => {
  return (
    <>
    <Link to="/" className="flex items-center" >
        <img src={guimarLogo} className="h-20"/>
        <p className="text-light-color text-2xl font-montserrat font-normal">LogicCraft</p>
    </Link>        
</>
  )
}

export default Logo
