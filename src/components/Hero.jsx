import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80";

    // Función para scroll suave a la sección
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button className="btn btn-dark btn-lg"onClick={() => scrollToSection("mas-vendidos")}>
            Ver más vendidos
          </button>
          <button className="btn btn-outline-dark btn-lg" onClick={() => scrollToSection("novedades")}>
            Descubrir novedades
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
