import CardPlan from "../molecules/CardPlan"

const ContentPlans = ({title , text}) => {
  return (
    <section className="bg-secundary-color w-full h-auto font-montserrat pb-24">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h3 className="text-5xl text-primary-color font-montserrat  font-bold text-center py-8">{title} </h3>
            <p className="text-3xl text-light-color font-bold text-center pt-4"> {text}</p>
          </div>
          <div className="w-full sm:w-11/12 flex flex-wrap mx-auto -m-4">
            {/* Basic*/}
            <CardPlan   
                planType="basic"
                type="Básico"
                price="s/199.99"
                numStudent="1"
                saving="⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            />
            {/* Duo*/}
            <CardPlan   
                planType="basic"
                type="Dúo"
                price="s/349.99"
                numStudent="2"
                saving="Ahorras un 12.50%"
            />
            {/* Familiar*/}
            <CardPlan
                planType="family"
                type="Familiar"
                price="S/499.99"
                numStudent={4}
                saving="Ahorras un 37.50%"
            />
          </div>
        </div>
    </section>
  )
}

export default ContentPlans