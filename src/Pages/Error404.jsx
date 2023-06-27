import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center">
        <iframe
          src="https://embed.lottiefiles.com/animation/80698"
          width={900}
          height={500}
        ></iframe>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Link to="./" className="button-verproductos ">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;
