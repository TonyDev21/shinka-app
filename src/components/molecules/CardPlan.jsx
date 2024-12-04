const CardPlan = ({planType, type, price,numStudent , saving }) => {

  const styles = {
      basic: {
      borderColor: 'border-primary-color',
      bgColor: 'bg-dark-light',
      textColor: 'text-light-color',
      buttonBg: 'bg-primary-color',
      buttonText: 'text-secundary-color',
      borderBottom: 'border-primary-color',
      hoverBG:'hover:bg-dark-color',
      hoverText:'hover:text-light-color'
      },
      family: {
      borderColor: 'border-dark-color',
      bgColor: 'bg-dark-color',
      textColor: 'text-primary-color',
      buttonBg: 'bg-primary-color',
      buttonText: 'text-dark-color',
      borderBottom: 'border-secundary-color',
      hoverBG:'hover:bg-secundary-color',
      hoverText:'hover:text-light-color'
      },
  };

  const selectedStyle = styles[planType] || styles.basic;
  
return (
  <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
      <div className={`h-full p-6 rounded-3xl border-2 ${selectedStyle.borderColor} ${selectedStyle.bgColor} shadow-md flex flex-col relative overflow-hidden`}>
          <h3 className={`text-sm tracking-widest title-font mb-1 font-bold pb-4 ${selectedStyle.textColor}`}>{type}</h3>
          <h2 className={`font-number font-bold text-5xl ${selectedStyle.textColor} leading-none flex items-center pb-7 mb-4 border-b ${selectedStyle.borderBottom}`}>
              <span >{price}</span>
              <span className={`text-lg ml-1 ${selectedStyle.textColor} font-bold`}>/anual</span>
          </h2>
          <p className={`flex items-center ${selectedStyle.textColor} mb-2 mt-4`}>
              <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${selectedStyle.buttonBg} rounded-full flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                  </svg>
              </span>
              Acceso para {numStudent} estudiante{numStudent > 1 ? 's' : ''}
          </p>
          <p className={`flex items-center ${selectedStyle.textColor} mb-2`}>
              <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${selectedStyle.buttonBg} rounded-full flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                  </svg>
              </span>
              Acceso a todos los cursos
          </p>
          <p className={`flex items-center ${selectedStyle.textColor} mb-2`}>
              <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${selectedStyle.buttonBg} rounded-full flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                  </svg>
              </span>
              Certificados de Finalización
          </p>
          <p className={`flex items-center ${selectedStyle.textColor} mb-11`}>
              <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${selectedStyle.buttonBg} rounded-full flex-shrink-0`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                  </svg>
              </span>
              Soporte en menos de 24 horas
          </p>
          <button className={`w-full flex items-center mt-auto ${selectedStyle.buttonText} ${selectedStyle.buttonBg} font-bold border-0 py-2 px-4 focus:outline-none ${selectedStyle.hoverBG} ${selectedStyle.hoverText} rounded transition duration-400`}>
              Suscribirse
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
          </button>
          <p className={`text-xs ${selectedStyle.textColor} mt-3`}>{saving}</p>
      </div>
  </div>
)
}

export default CardPlan
