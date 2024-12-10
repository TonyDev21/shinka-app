import { Link  } from "react-router-dom"



const BannerBeca = () => {


  return (
    <section className="bg-banner-beca bg-cover bg-center bg-no-repeat w-full h-auto font-montserrat" >
    <div className="container mx-auto  text-light-color h-80 flex flex-col justify-center items-center text-center gap-6">
        <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">¿No tienes los recursos suficientes?</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">¡Aplica a una beca y alcanza tus metas!</p>
        </div>
        <div className="mt-4">
            <Link 
            to="/becas" 
            className="btn bg-secundary-color py-6 px-8 text-xl text-light-color hover:bg-dark-light hover:text-light-color"
           
            >
              Postular
            </Link>
        </div>
    </div>
</section>
  )
}

export default BannerBeca
