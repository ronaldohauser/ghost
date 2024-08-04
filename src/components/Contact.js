import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
