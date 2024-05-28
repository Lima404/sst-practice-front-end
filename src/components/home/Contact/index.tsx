import "./styles.css";
import Instagram from "../../../assets/contass/instagram.svg";
import Face from "../../../assets/contass/icon.svg";
// import FormMen from "../FormMen";
// import { lazy } from "react";

const Contact = () => {
  return (
    <div className="contact" id="contatos">
      <div className="contacts">
        <div className="talk">
          <h3 className="tit-contact">Fale Conosco</h3>
          <p className="ph-contact">
            Tem alguma dúvida sobre nossos serviços ou deseja marcar um
            diagnóstico gratuito? Deixe uma mensagem através do formulário ao
            lado ou entre em contato conosco através dos seguintes canais:
          </p>
        </div>

        <div className="cont">
          <h3 className="tit-contact">Contatos</h3>

          <div className="number-contact">
            <div className="tel">
              <h5 className="tit-tel">Telefone</h5>
              <p className="number-tel">(84) 98127-7271</p>
            </div>

            <div className="tel">
              <h5 className="tit-tel">E-mail</h5>
              <p className="number-tel">contato@praticasst.com.br</p>
            </div>
          </div>
        </div>

        <div className="socials">
          <h3 className="tit-contact">Redes Sociais</h3>

          <div className="but-socials">
            <a href="">
              <img src={Instagram} alt="instagram" className="img-cont" />
            </a>
            <a href="">
              <img src={Face} alt="facebook" className="img-cont" />
            </a>
          </div>
        </div>
      </div>
      <div className="mensage">
        <h3 className="tit-contact">Nosso endereço</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.9677736910207!2d-35.19819604397402!3d-5.860155057930502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff40118810d5%3A0x31765d80c554576!2sAv.%20Engenheiro%20Roberto%20Freire%2C%201962%20-%20Sala%2013%20-%20Capim%20Macio%2C%20Natal%20-%20RN%2C%2059082-095!5e0!3m2!1spt-BR!2sbr!4v1716856016751!5m2!1spt-BR!2sbr" width="100%" height={400} loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Contact;
