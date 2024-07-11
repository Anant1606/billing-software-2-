import React from "react";
import headerImage from '../images/header.png'; // Adjust the path according to your project structure

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <img 
            src={headerImage} 
            alt="Header Image" 
            className="w-full h-auto mb-3" 
          />
        </div>
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Quotation
          </h1>
        </div>
      </header>
    </>
  );
}
