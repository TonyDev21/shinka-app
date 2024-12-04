import CardInfo from "../molecules/CardInfo"
import { FaBookOpenReader , FaLaptop  , FaCertificate } from "react-icons/fa6";

const WhyShinka = () => {
  return (
    <div className="bg-dark-light w-full h-auto ">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-montserrat py-8 font-bold text-primary-color">¿Por qué Academia CodexFlow?</h3>
        <div className="container mx-auto h-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <CardInfo
            icon={<FaBookOpenReader />} 
            title="Fácil de Aprender" 
            description="En CodexFlow, te ayudamos a aprender de forma sencilla y sin complicaciones. Queremos que comprendas conceptos difíciles de manera clara, adaptándonos siempre a tu propio ritmo de aprendizaje personalizado."
            />
            <CardInfo
            icon={<FaLaptop  />} 
            title="Acceso a las 24hrs" 
            description="Puedes acceder a nuestras clases y recursos cuando mejor te convenga. Estudia a tu manera, con la libertad de aprender en el momento y lugar que te resulten más cómodos siempre, sin ninguna restricción que limite tu proceso de aprendizaje."
            />
            <CardInfo
            icon={<FaCertificate />} 
            title="Certificado Digital" 
            description="Al terminar nuestros cursos, recibirás un certificado digital que podrás agregar a tu portafolio. Con él, mostrarás tus habilidades en robótica y programación, destacando para futuras oportunidades profesionales en el campo tecnológico y educativo."
            />
        </div>
    </div>
  )
}

export default WhyShinka
