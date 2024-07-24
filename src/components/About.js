import React from 'react';
import './About.css';
import training1 from '../assets/training1.jpg';
import training2 from '../assets/training2.jpg';
import training3 from '../assets/training3.jpg';
import training4 from '../assets/training4.jpg';
import training5 from '../assets/training5.jpg';
import training6 from '../assets/training6.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-text">
          <h2>Sobre Nós</h2>
          <p> Lorem ipsum dolor sit amet. Ad enim commodi sit consequuntur incidunt a quia autem a perspiciatis voluptate est sint consequatur. Eos assumenda veniam in veniam blanditiis ea perferendis veniam ex cumque quia sit minus odio. Ea quod totam et iure modi est tempore maiores quo alias saepe.
Id odio magni et consectetur placeat est officia dolor. Sed dolores cupiditate et commodi deserunt qui voluptates quia non necessitatibus neque vel quia consequuntur?
Vel quia itaque qui harum similique ex autem ducimus. Cum fugit fugit et illo unde in amet alias ab similique repellendus non quia corrupti. Lorem ipsum dolor sit amet. Ad enim commodi sit consequuntur incidunt a quia autem a perspiciatis voluptate est sint consequatur. Eos assumenda veniam in veniam blanditiis ea perferendis veniam ex cumque quia sit minus odio. Ea quod totam et iure modi est tempore maiores quo alias saepe.
Id odio magni et consectetur placeat est officia dolor. Sed dolores cupiditate et commodi deserunt qui voluptates quia non necessitatibus neque vel quia consequuntur?
Vel quia itaque qui harum similique ex autem ducimus. Cum fugit fugit et illo unde in amet alias ab similique repellendus non quia corrupti. </p>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <img src={training1} alt="Treinamento 1" />
          <h3>Treinamento A</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <img src={training2} alt="Treinamento 2" />
          <h3>Treinamento B</h3>
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>
        <div className="card">
          <img src={training3} alt="Treinamento 3" />
          <h3>Treinamento C</h3>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div className="card">
          <img src={training4} alt="Treinamento 4" />
          <h3>Treinamento D</h3>
          <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
        </div>
        <div className="card">
          <img src={training5} alt="Treinamento 5" />
          <h3>Treinamento E</h3>
          <p>Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis.</p>
        </div>
        <div className="card">
          <img src={training6} alt="Treinamento 6" />
          <h3>Treinamento F</h3>
          <p>Vestibulum at eros. Proin id ligula vel lacus tincidunt auctor.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
