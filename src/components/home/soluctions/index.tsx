import './styles.css'
import Doc from '../../../assets/system/doctorSystem.png'
import SoluctionsLine from '../SolutionsLine'
import Card from '../../../assets/system/cards.svg'
import Hitoric from '../../../assets/system/historic.svg'
import Time from '../../../assets/system/time.svg'
import Bell from '../../../assets/system/notification.svg'
import Unity from '../../../assets/system/unity.svg'
import Consult from '../../../assets/system/consult.svg'

const Soluctions = () => {
    return (
        <div className="container--system">
            <img src={Doc} alt="imagem doctor" className='doc' />
            <article className="right">

                <div className="start">
                    <h3 className='title'>Soluções Ágeis</h3>
                    <p className="subtitle">Desenvolver soluções ágeis para melhor experiência de usuário, onde a entrega com rapidez e qualidade é nossa maior prioridade.</p>
                </div>

                <div className="solutions">

                    <SoluctionsLine
                        title="Cards interativos"
                        iconeUrl={Card}
                    />

                    <SoluctionsLine
                        title="Acesso a histórico de documentos"
                        iconeUrl={Hitoric}
                    />

                    <SoluctionsLine
                        title="Acompanhamento em tempo real"
                        iconeUrl={Time}
                    />

                    <SoluctionsLine
                        title="Notificação de updates"
                        iconeUrl={Bell}
                    />

                    <SoluctionsLine
                        title="Gerenciamento por unidade"
                        iconeUrl={Unity}
                    />

                    <SoluctionsLine
                        title="Acompanhamento de consultas"
                        iconeUrl={Consult}
                    />

                </div>

                <h2 className="perfect">
                    Só a prática leva a perfeição!
                </h2>
            </article>
        </div>
    )
}

export default Soluctions