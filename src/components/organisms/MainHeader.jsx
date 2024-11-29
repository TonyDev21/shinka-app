import { useState } from "react";
import Logo from "../molecules/header/Logo";
import MainMenu from "../molecules/header/MainMenu";

const MainHeader = ({ Children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-secundary-color border-b-2 border-primary-color">
        <nav className="container mx-auto flex justify-around sm:justify-between items-center ">
          <Logo />
          <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
      </header>
      <main>{Children}</main>
    </>
  );
};

export default MainHeader;
