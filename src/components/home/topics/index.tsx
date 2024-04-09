import './style.css'


interface TopicsProps {
    tit: string,
    ph: string
}

const Topics = ({ tit, ph } :TopicsProps) => {
    return (
        <div className='card-flyer'>
            <h4 className='tit'>{tit}</h4>
            <div className='paragraph'>
                <p className='ph'>
                    {ph}
                </p>
            </div>
        </div>
    )
}

export default Topics