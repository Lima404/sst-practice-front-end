import './styles.css'
import React from 'react';

interface BaseProps {
     label: string,
     type: string,
     valor: string,
     placeholder: string
}

type CampoProps = Required<BaseProps>

const FieldText: React.FC<CampoProps> = ({ label, type, valor, placeholder }) => {
        return(
            <div>
                <label>
                    {label}
                </label>
                <input type={type} value={valor} placeholder={placeholder}/> 
            </div>
    )

}

export default FieldText