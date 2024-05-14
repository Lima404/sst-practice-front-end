import Topics from "../topics";
import "./styles.css";

const Flyer = () => {
  return (
    <div className="flyer" id="motivacoes">
      <div className="title-sub">
        <h1 className="title-fleyr">
          "Priorizar a saúde e segurança no trabalho é investir no bem mais
          valioso: a vida. Proteger para prosperar!"
        </h1>
      </div>

      <Topics
        tit="1. Proteção do bem-estar dos trabalhadores:"
        ph="A principal importância da saúde e segurança do trabalho é proteger os trabalhadores de ferimentos, doenças e outros problemas de saúde relacionados ao trabalho. Implementando medidas e práticas de segurança adequadas, as empresas podem garantir um ambiente de trabalho mais seguro e saudável para seus funcionários."
      />

      <Topics
        tit="2. Aumento da produtividade:"
        ph="Ambientes de trabalho seguros e saudáveis contribuem significativamente para a melhoria da produtividade dos trabalhadores. Funcionários saudáveis e bem cuidados tendem a ser mais felizes, mais engajados e eficientes, o que, por sua vez, pode levar a uma maior qualidade de trabalho e resultados."
      />

      <Topics
        tit="3. Redução de custos para a empresa:"
        ph="Acidentes de trabalho e doenças ocupacionais resultam em custos significativos para as empresas, incluindo despesas médicas, indenizações, perda de tempo de trabalho e potenciais multas por não conformidade com regulamentações. Práticas robustas de saúde e segurança do trabalho ajudam a minimizar esses riscos e custos associados."
      />

      <Topics
        tit="4. Melhoria da imagem e da reputação da empresa:"
        ph="Empresas que priorizam a saúde e a segurança do trabalho são vistas de forma mais positiva tanto por seus funcionários quanto pela sociedade. Isso pode melhorar a imagem pública da empresa, atrair talentos de qualidade e fomentar a lealdade dos funcionários, além de potencialmente evitar publicidade negativa associada a acidentes de trabalho."
      />

      <Topics
        tit="5. Conformidade legal e regulatória:"
        ph="Cumprir as leis e regulamentações de saúde e segurança do trabalho é obrigatório em muitas jurisdições. As empresas que seguem estritamente as normas e regulamentos não apenas evitam penalidades legais, mas também demonstram um compromisso com a proteção de seus funcionários, o que é fundamental para a sustentabilidade a longo prazo do negócio."
      />
    </div>
  );
};

export default Flyer;
