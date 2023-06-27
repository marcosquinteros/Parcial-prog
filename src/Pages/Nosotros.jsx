import React from "react";
import Integrantes from "../Components/Integrantes";

const Nosotros = () => {
  return (
    <div className="w-100">
      <main className="nosotros-container">
        <h1 className="text-center pt-5 nosotros-text title">
          ¿Quienes somos?
        </h1>
        <Integrantes />
        <hr />
      </main>
    </div>
  );
};

export default Nosotros;
