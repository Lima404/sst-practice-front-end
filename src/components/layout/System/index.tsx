import './styles.css'
import Doc from '../../../assets/system/left-removebg-preview.png'
import LineSystem from '../LineSystem'
import Card from '../../../assets/system/cards.svg'
import Hitoric from '../../../assets/system/historic.svg'
import Time from '../../../assets/system/time.svg'
import Bell from '../../../assets/system/notification.svg'
import Unity from '../../../assets/system/unity.svg'
import Consult from '../../../assets/system/consult.svg'

const System: React.FC = () => {
    return (
            <div className="container--system">
                <div className="cube">

                </div>
                <img src={Doc} alt="imagem doctor" className='Doc'/>
                <article className="right">

                    <div className="start">
                        <h3 className='title'>Soluções Ágeis</h3>
                        <p className="subtitle">Desenvolver soluções ágeis para melhor experiência de usuário, onde a entrega com rapidez e qualidade é nossa maior prioridade.</p>
                    </div>
                    
                    <div className="solutions">

                        <LineSystem
                        title="Cards interativos"
                        iconeUrl={Card}
                        />

                        <LineSystem
                        title="Acesso a histórico de documentos"
                        iconeUrl={Hitoric}
                        />

                        <LineSystem
                        title="Acompanhamento em tempo real"
                        iconeUrl={Time}
                        />

                        <LineSystem
                        title="Notificação de updates"
                        iconeUrl={Bell}
                        />

                        <LineSystem
                        title="Gerenciamento por unidade"
                        iconeUrl={Unity}
                        />

                        <LineSystem
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

export default System