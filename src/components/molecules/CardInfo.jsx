

const CardInfo = ({icon, title, description}) => {
  return (
    <div className="w-full border-b-2 border-primary-color p-8 bg-dark-color flex flex-col items-center text-center mb-8  
    min-h-[350px] hover:scale-105 transform transition duration-300">
      <div className="text-5xl text-primary-color mb-6">{icon}</div>
      <h4 className="text-2xl font-montserrat font-bold mb-4 text-primary-color">{title}</h4>
      <p className="text-base font-montserrat font-normal text-light-color">{description}</p>
    </div>
  )
}

export default CardInfo
