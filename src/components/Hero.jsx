import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80";

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">¡Bienvenido a Relatos de Papel!</h1>
        <p className="hero-lead">
          Explora nuestros libros más vendidos y las últimas novedades.<br />
          <span className="hero-bold">
            En libros seleccionados de nuestra tienda online
          </span>
        </p>
        <div className="hero-buttons">
          <a href="#mas-vendidos" className="btn btn-dark btn-lg">
            Ver más vendidos
          </a>
          <a href="#novedades" className="btn btn-outline-dark btn-lg">
            Descubrir novedades
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
