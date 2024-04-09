import './styles.css'


interface ForMenProps {
    title: string,

}

const FormMen = ({title}: ForMenProps) => {
    return (
        <div className='area-form'>
            <h5 className="tit-area">{title}</h5>
            <textarea className='text-area-form'>
            
            </textarea>
        </div>
    )
}

export default FormMen