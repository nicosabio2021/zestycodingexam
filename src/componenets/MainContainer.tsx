import React from "react";
import NavBar from "./NavBar";
import { MainContainerProps } from '../common/interfaces';

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return(
    <main className="px-24 py-8">
      <header>
        <NavBar />
      </header>
      <div className="flex"> 
          { children }
      </div>
    </main>
  );
}

export default MainContainer;