import './styles.css'
import Anamnese from '../../../assets/hero2/anamnese.svg'
import Aso from '../../../assets/hero2/aso.svg'
import Atendimento from '../../../assets/hero2/atendimento.svg'
import Laudo from '../../../assets/hero2/laudo.svg'
import Mais from '../../../assets/hero2/mais.svg'
import Doc from '../../../assets/hero2/doc.svg'

const Hero2: React.FC = () => {
    return(
        <div className='main'>
            <div className="options">
                <p className='Title--serv'>Nossos Serviçoes</p>
                <div className="Options--serv">
                    <img src={Anamnese} alt="anamnese" />
                    <p className='Option--serv'>Anamnese ocupacional</p>
                </div>
                <div className="Options--serv">
                    <img src={Aso} alt="Aso" />
                    <p className='Option--serv'>ASO</p>
                </div>
                <div className="Options--serv">
                    <img src={Laudo} alt="Laudo" />
                    <p className='Option--serv'>Laudo Caracterizador</p>
                </div>
                <div className="Options--serv">
                    <img src={Atendimento} alt="Atendimento" />
                    <p className='Option--serv'>Atendimento ao paciente</p>
                </div>
                <div className="Options--serv">
                    <img src={Mais} alt="Mais" />
                    <p className='Option--serv'>Mais Serviços</p>
                </div>
            </div>
            <div className="right">
                <img className='team--doc' src={Doc} alt="team doc" />
            </div>
        </div>
    )
}

export default Hero2