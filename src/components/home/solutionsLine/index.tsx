import './system.css';

interface SoluctionsLineProps {
    title: string;
    iconeUrl: string;
}

const SoluctionsLine = ({ title, iconeUrl }: SoluctionsLineProps) => {
    return (
        <div className='pog'>
            <img src={iconeUrl} alt="icone" />
            <h5>{title}</h5>
        </div>
    );
}

export default SoluctionsLine;
