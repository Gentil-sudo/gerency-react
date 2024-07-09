import "./form.css";
import { useState } from "react";
const Form = () => {
  const [calc, setCalc] = useState(false)
  const [calcError, setCalcError] = useState(false)
  const [formData, setFormData] = useState({
    salary: "",
    spend: "",
    type_spend: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  function getCalc() {
    //calcular os valores do input e falar quando se deve investir
    let salary = parseFloat(formData.salary)
    let spend = parseFloat(formData.spend)
    let type_spend = formData.type_spend

    let amount = salary - spend
    let result = parseFloat(0.3 * amount)
    localStorage.setItem('result', JSON.stringify(result.toFixed(2)));
    localStorage.setItem('type_spend', JSON.stringify(type_spend));

    if (result >= 1) {  
      setCalc(true)
      setCalcError(false)
    }else {
      setCalcError(true)
    }

}

  const handleOnlyNumber = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    e.target.value = numericValue.slice(0, 20)
  }

  return (
    <div className="container">
      <div className="card-salary">
        <h1 className="h1-salary">Digite seu salário</h1>
        <input
          type="text"
          placeholder="Digite seu salário"
          className="input-salary"
          value={formData.salary}
          id="salary"
          onChange={handleChange}
          onInput={handleOnlyNumber}
        />
      </div>
      <div className="spend">
        <h2 className="spend-h2">Gastos</h2>
        <input
          type="text"
          placeholder="Digite seus gastos"
          className="spend-input"
          value={formData.spend}
          id="spend"
          onChange={handleChange}
          onInput={handleOnlyNumber}
        />
      </div>
      <div className="select-container">
        <label className="select-label">Selecione</label>
        <select
          name=""
          className="select"
          value={formData.type_spend}
          id="type_spend"
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Contas">Contas</option>
          <option value="Lazer">Lazer</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Games">Games</option>
          <option value="Namorada">Namorada</option>
        </select>
        <button className="calc-btn" onClick={getCalc}>Calcular</button>
        {calc && (<><h3 className="h3-calc">Valor Calculado com Sucesso!</h3></>)}
        {calcError && (<><h3 className="h3-calc">Preencha todos os campos!</h3></>)}
      </div>
    </div>
  );
};

export default Form;
