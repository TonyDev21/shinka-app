const CreateApp = () => {
  return (
    <div className="bg-cover bg-banner-curso bg-center w-full min-h-screen flex items-center justify-center">
        <div className="text-center max-w-[800px] p-8 bg-black bg-opacity-85 rounded-lg">
          <h1 className="ont-montserrat font-bold text-light-color mb-8 text-5xl">Crea aplicaciones impactantes</h1>
          <p className="font-montserrat text-light-color text-xl mb-8">
            En LogicCraft, no solo aprenderás a programar, aprenderás a construir.
            Te damos las herramientas para que crees aplicaciones que marquen la
            diferencia, capaces de resolver problemas reales y transformar la forma
            en que interactuamos con la tecnología.
          </p>
          <button className="btn text-xl py-4">Comienza tu viaje</button>
        </div>
    </div>
  );
};

export default CreateApp;
