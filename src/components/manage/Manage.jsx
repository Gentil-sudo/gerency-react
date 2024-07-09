import './manage.css'
import { useState } from 'react';


const Manage = () => {

    const [formData, setFormData] = useState({
        invest: localStorage.getItem('result'),
        type_spend: localStorage.getItem('type_spend')
    })

    return ( 
        <div className='container'>
            <div className='invest'>
                <label className='label-invest'>Valor a investir</label>
                <input className='invest-input' id='invest.value' disabled value={formData.invest}/>
            </div>
            <div className='type'>
                <label className='label-option'>Gasto principal</label>
                <input className='spend-input' id='type_spend.value' disabled value={formData.type_spend}/>
            </div>
        </div>
    );
}

export default Manage;