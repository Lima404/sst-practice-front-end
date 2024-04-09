import './styles.css'
import Instagram from '../../../assets/contass/instagram.svg'
import Face from '../../../assets/contass/icon.svg'
import FormMen from '../FormMen'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contacts">

                <div className='talk'>
                    <h3 className="tit-contact">Fale Conosco</h3>
                    <p className="ph-contact">Tem alguma dúvida sobre nossos serviços ou deseja marcar um diagnóstico gratuito? Deixe uma mensagem através do formulário ao lado ou entre em contato conosco através dos seguintes canais:</p>
                </div>

                <div className='cont'>
                    <h3 className="tit-contact">Contatos</h3>

                    <div className="number-contact">
                        <div className='tel'>
                            <h5 className="tit-tel">Telefone</h5>
                            <p className="number-tel">(84) 98127-7271</p>
                        </div>

                        <div className='tel'>
                            <h5 className="tit-tel">E-mail</h5>
                            <p className="number-tel">contato@praticasst.com.br</p>
                        </div>
                    </div>

                </div>
                
                <div className='socials'>
                    <h3 className="tit-contact">Redes Sociais</h3>

                    <div className="but-socials">
                        <a href="">
                            <img src={Instagram} alt="instagram" className='img-cont'/>
                        </a>
                        <a href="">
                            <img src={Face} alt="facebook" className='img-cont'/>
                        </a>
                    </div>

                </div>

            </div>
            <div className="mensage">
                <div className="card-mensage">

                    <div className="header-mensage">
                        <h4 className="tit-mensage">Deixe uma mensagem</h4>
                        <p className="ph-mensage">
                            E entraremos em contato para encontrar a melhor solução para você e seu negócio.
                        </p>
                    </div>

                    <div className="form-area">
                        <FormMen
                            title='Nome Completo'
                        />
                        <FormMen
                            title='E-mail'
                        />
                        <FormMen
                            title='Telefone'
                        />

                        <div className="men-area">
                            <h5 className="tit-area">Mensagem</h5>
                            <textarea className='text-area-men'>
                            
                            </textarea>
                        </div>

                        <div className="but-area">
                            <button className='but-form'>Enviar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact