import { Link } from "react-router-dom"
import codexLogo from '../../../assets/CodexFlow.svg'

const Logo = () => {
  return (
    <>
    <Link to="/" className="flex items-center" >
        <img src={codexLogo} className="h-16"/>
        <p className="text-light-color text-2xl font-montserrat font-normal">CodexFlow</p>
    </Link>        
</>
  )
}

export default Logo
