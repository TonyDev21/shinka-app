import MainHeader from "../organisms/MainHeader";
import Footer from "../organisms/Footer"
import { Outlet } from "react-router-dom";


const App = () => {
  

  return (
    <>
      <MainHeader/>
      <section>
          <Outlet/>
      </section>
      <Footer/>
    </>
  );
};

export default App;
