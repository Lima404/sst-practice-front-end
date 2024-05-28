import "./styles.css";
import ImgF from "../../../assets/footer/ppst-footer.svg";
import Instagram from "../../../assets/contass/instagram.svg";
import Face from "../../../assets/contass/icon.svg";

const Footer = () => {
  const handleScrollTo = (session: string) => {
    const servicosSection = document.getElementById(session);
    if (servicosSection) {
      servicosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="right">
        <img src={ImgF} alt="imagem footer" className="imagem-footer" />
      </div>

      <div className="left">
        <div className="map-web">
          <h4 className="tit-map">Mapa do Site</h4>

          <div className="map-options">
            <a onClick={() => handleScrollTo("sobre")} className="link-section">
              Home
            </a>
            <a
              onClick={() => handleScrollTo("servicos")}
              className="link-section"
            >
              Serviços
            </a>
            <a
              onClick={() => handleScrollTo("sistema")}
              className="link-section"
            >
              Sistema
            </a>
            <a
              onClick={() => handleScrollTo("motivacoes")}
              className="link-section"
            >
              Motivações
            </a>
            <a
              onClick={() => handleScrollTo("contatos")}
              className="link-section"
            >
              Contatos
            </a>
          </div>
        </div>
        <div className="socials-media">
          <h4 className="tit-map">Redes Sociais</h4>

          <div className="but-media">
            <a href="">
              <img src={Instagram} alt="instagram" className="img-cont" />
            </a>
            <a href="">
              <img src={Face} alt="facebook" className="img-cont" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
