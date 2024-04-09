import React, { useState } from 'react';
import './FaleConosco.css'; // Import the CSS file for FaleConosco

const FaleConosco = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fale-conosco-container">
      {/* Contact Form */}
      <div className="contact-form">
        <h3>Envie uma mensagem!</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows="5" required></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <h3>Dados de Contato</h3>
        <table>
          <tbody>
            <tr>
              <td>Razão Social:</td>
              <td>J.b. Casa de Embalagens LTDA</td>
            </tr>
            <tr>
              <td>CNPJ:</td>
              <td>04.094.725/0001-47</td>
            </tr>
            <tr>
              <td>Telefone:</td>
              <td>(51) 3595-7639</td>
            </tr>
            <tr>
              <td>Whatsapp:</td>
              <td>(51) 99100-5762</td>
            </tr>
            <tr>
              <td>Endereço:</td>
              <td>Estrada Presidente Lucena, 4547, Petrópolis, Novo Hamburgo, RS - 93344-420</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>contato@jbembalagens.com.br</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Mensagem enviada! Responderemos o mais breve possível.</p>
            <button onClick={closePopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaleConosco;
