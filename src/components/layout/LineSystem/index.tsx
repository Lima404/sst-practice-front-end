import './system.css'

interface LineItens {
        title: string;
        iconeUrl: string;
    }

const LineSystem: React.FC<LineItens> = ({ title, iconeUrl }) => {
    return(
        <div className='line'>
            <img src={iconeUrl} alt="icone" />
            <h5>
                {title}
            </h5>
        </div>
    )
}

export default LineSystem