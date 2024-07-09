import { useState } from 'react'
import './home.css'
import Manage from '../../components/manage/Manage'
import Form from '../../components/form/Form'

function Home() {

  const [loadForm, setLoadForm] = useState(true)

  const [loadManage, setLoadManage] = useState()

  function handleManage(){
    setLoadForm(false);
    setLoadManage(true)
  }
  function handleForm(){
    setLoadForm(true);
    setLoadManage(false)
    localStorage.clear()
  }

  return (
      <div className='home-body'> 
        <h1 className='title'>Gerenciador de Finanças</h1>
        {loadForm && (<>
          <Form/> 
          <button className="select-btn" onClick={handleManage}>Gerenciar</button></>)}
        {loadManage && (<>
        <Manage/> 
        <button className="select-btn" onClick={handleForm}>Voltar</button></>)}
        
      </div>
  )
}

export default Home
