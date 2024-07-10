// src/components/Banner.js
import React from 'react';
import './Banner.css'; // Estilos específicos para o banner

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Treinamentos de Segurança e Tiro Esportivo</h1>
        <p>Descubra como melhorar suas habilidades com os melhores instrutores.</p>
        <div className="cta-buttons">
          <button className="button">Saiba Mais</button>
          <button className="button">Inscreva-se</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
