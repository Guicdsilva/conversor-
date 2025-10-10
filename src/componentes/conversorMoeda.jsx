
import { useState ,useEffect} from "react";

 
   function Moeda() {

     const taxasMoeda = {
       USD: 1,
       EUR: 0.85,
       BRL: 5.20,
       JPY: 110.0,
       AUD: 1.35
      };
     
      const [valorEntrada,setValorEntrada] = useState('')
      const [moedaOrigem,setMoedaOrigem] = useState("USD")
      const [moedaDeDestino,setMoedaDeDestino] = useState("BRL")
      const [resultado ,setResultado] = useState("") 

 function conversor(){
 const moeda = valorEntrada / taxasMoeda[moedaOrigem]
  const resul = moeda * taxasMoeda[moedaDeDestino]
   // if(valorEntrada === ''){
     // alert(`preencha o campo (${valorEntrada})`)
     // return
  //  }
    if(isNaN(valorEntrada)){
      alert(`preencha o campo (${valorEntrada})`)
      setValorEntrada("")
    }
    else{
     setResultado(`${resul.toFixed(2)} ${moedaDeDestino}`) 
    }
  }
 function inverter(){
    setMoedaOrigem(moedaDeDestino)
    setMoedaDeDestino(moedaOrigem)
 }
  useEffect(() => {
    conversor();
  }, [valorEntrada, moedaOrigem ,moedaDeDestino]);

 return (
<div>
<section className="conversor" data-tipo="moeda">
      <h2>Moeda</h2>


      
      <label>Quero converter:</label>
      <input  className="valor-input" 
      placeholder=" digite o valor: "
     value={valorEntrada}
      onChange={(e) => setValorEntrada(e.target.value)}
      />



        <label>De:</label>
  
      <select className="de-unidade"
      
      value={moedaOrigem}
      onChange={(e) => setMoedaOrigem(e.target.value)}
      >

        <option value="USD">Dólar (USD)</option>
        <option value="EUR" >Euro (EUR)</option>
        <option value="BRL">Real (BRL)</option>
      </select>
      
       


  <input type="button" className="converter-btn" onClick={inverter} value="inverter"/>

      <label>Para:</label>
      <select className="para-unidade"
      value={moedaDeDestino}
      onChange={(e) => setMoedaDeDestino(e.target.value)}>
        <option value="BRL">Real (BRL)</option>
        <option value="USD">Dólar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="JPY">Iene (JPY)</option>
        <option value="AUD">Dólar Australiano (AUD)</option>
      </select>





      


      <div className="resultado">
        <input  className="resultado-input" readOnly
        value={resultado}
         
        />
        
      </div>  
    </section>

    </div>
 )
 }
 
export default Moeda
 