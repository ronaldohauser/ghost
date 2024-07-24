import React from 'react';
import './Services.css';
import imgSeguranca from '../assets/seguranca.jpg';
import imgDefesa from '../assets/defesa.jpg';
import imgPreparacao from '../assets/preparacao.jpg';
import imgOutros from '../assets/outros.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-category">
        <h2>Segurança e Emergências</h2>
        <ul>
          <li>Brigada de Incêndio</li>
          <li>Primeiros Socorros</li>
          <li>Gestão de Crises</li>
          <li>Comunicação Eficaz em Emergências</li>
          <li>Uso de Equipamentos de Segurança</li>
          <li>Técnicas de Combate a Incêndios Urbanos</li>
        </ul>
        <img src={imgSeguranca} alt="Segurança e Emergências" />
      </div>

      <div className="service-category">
        <h2>Defesa Pessoal e Autodefesa</h2>
        <ul>
          <li>Tiro Esportivo</li>
          <li>Defesa Pessoal Urbana</li>
          <li>Técnicas de Autodefesa em Situações Reais</li>
          <li>Defesa Pessoal com Objetos do Dia a Dia</li>
        </ul>
        <img src={imgDefesa} alt="Defesa Pessoal" />
      </div>

      <div className="service-category">
        <h2>Preparação e Sobrevivência</h2>
        <ul>
          <li>Técnicas de Evasão</li>
          <li>Sobrevivência em Ambientes Urbanos</li>
          <li>Escapologia e Fuga em Emergências</li>
          <li>Preparação para Desastres Naturais</li>
          <li>Técnicas de Orientação e Navegação em Terreno Desconhecido</li>
        </ul>
        <img src={imgPreparacao} alt="Preparação e Sobrevivência" />
      </div>

      <div className="service-category">
        <h2>Outros</h2>
        <ul>
          <li>Treinamento de Resiliência</li>
          <li>Cuidado e Manutenção de Armas</li>
          <li>Técnicas de Negociação em Situações de Crise</li>
          <li>Conduta em Situações de Sequestro</li>
          <li>Atendimento a Vítimas de Acidente</li>
          <li>Táticas de Vigilância e Proteção Pessoal</li>
          <li>Treinamento de Equipes para Situações de Emergência</li>
        </ul>
        <img src={imgOutros} alt="Outros Serviços" />
      </div>
    </div>
  );
};

export default Services;
