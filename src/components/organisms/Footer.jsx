import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secundary-color w-full h-auto font-montserrat">
        <div className="text-light-color max-w-screen-lg mx-auto h-auto flex flex-col sm:flex-row justify-between items-center text-sm py-4 px-4">
            {/* Redes */}
            <div className="flex space-x-4 pb-2 sm:pb-0">
            <a href="https://www.facebook.com/GuimarbotPeru/" target="_blank" rel="noopener noreferrer" className="text-lg">
                <FaFacebook />
            </a>
            <a href="#" className="text-lg">
                <FaYoutube />
            </a>
            <a href="#" className="text-lg">
                <FaTwitter />
            </a>
            </div>
            {/* Copyright */}
            <div className="text-center pb-2 sm:pb-0">
            <p>&copy; Copyright Academia LogicCraft 2024</p>
            </div>
            {/* Política */}
            <div className="text-center pb-2 sm:pb-0">
            <a href="#">Términos y Condiciones</a>
            </div>
        </div>
  </footer>
  )
}

export default Footer
