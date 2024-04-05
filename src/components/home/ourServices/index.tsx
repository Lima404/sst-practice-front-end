import './styles.css'
import Anamnese from '../../../assets/our-services/anamnese.svg'
import Aso from '../../../assets/our-services/aso.svg'
import Atendimento from '../../../assets/our-services/atendimento.svg'
import Laudo from '../../../assets/our-services/laudo.svg'
import Mais from '../../../assets/our-services/mais.svg'
import Doc from '../../../assets/our-services/doc.png'

const OurServices = () => {
    return(
        <div className='block--container'>
            <div className="left">
                <div className="options">

                    <p className='Title--serv'>Nossos Serviços</p>

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
            </div>

            <div className="right">
                <img className='team-doc' src={Doc} alt="team doc" />
            </div>

        </div>
    )
}

export default OurServices