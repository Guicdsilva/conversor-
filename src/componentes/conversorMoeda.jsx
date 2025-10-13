

import { useState ,useEffect} from "react";

 
   function Conversor() {
     
      
      const [valorEntrada,setValorEntrada] = useState('')
      const [unidadeOrigem,setUnidadeOrigem] = useState("BRL")
      const [unidadeDestino,setUnidadeDestino] = useState("USD")
      const [resultado,setResultado] = useState("rgr") 

     const [unidade ,setUnidade]= useState('moeda')
 
 const opcoesMoeda = [
    { value: 'USD', label: 'Dólar (USD)' },
    { value: 'BRL', label: 'Real (BRL)' },
    { value: 'EUR', label: 'Euro (EUR)' },
  ];

 
  const opcoesMetro = [
    { value: 'metros', label: 'Metros' },
    { value: 'quilometros', label: 'Quilômetros' },
    { value: 'centimetros', label: 'Centímetros' },
  ];

let opcoesAtuais;


      if (unidade === 'moeda') {
  opcoesAtuais = opcoesMoeda;
  
      }
      else{
  opcoesAtuais = opcoesMetro
}

      function inverter(){
        
            setUnidadeOrigem(unidadeDestino)
            setUnidadeDestino(unidadeOrigem)
        
    
 }

if(isNaN(valorEntrada)){
      alert(`preencha o campo (${valorEntrada})`)
      setValorEntrada("")
    }  

   

 function moeda(){
  const taxasMoeda = {
       USD: 1,
       EUR: 0.85,
       BRL: 5.20,
       JPY: 110.0,
       AUD: 1.35
      };
 const valor = valorEntrada / taxasMoeda[unidadeOrigem]
  const resul = valor * taxasMoeda[unidadeDestino]
   // if(valorEntrada === ''){
     // alert(`preencha o campo (${valorEntrada})`)
     // return
  //  }
    setResultado(resul.toFixed(2))
  }

    useEffect(() => {
      if(unidade === 'metro'){
        comprimento();
      }else{
        moeda()
      }
    },[valorEntrada, unidadeOrigem ,unidadeDestino]);

    function comprimento(){
      const fatoresComprimento = {
      metros: 1,
     quilometros: 1000,
     centimetros: 0.01
};   
   const valor = valorEntrada * fatoresComprimento[unidadeOrigem]
   const resul = valor / fatoresComprimento[unidadeDestino]

   setResultado(resul.toFixed(2))
    }
  
    
   function escolherUnidade(e){
    const novaUnidade = e.target.value
     setUnidade(novaUnidade)
     if (novaUnidade === 'moeda') {
    setUnidadeOrigem('USD');
    setUnidadeDestino('BRL');
  } else {
    setUnidadeOrigem('metros');
    setUnidadeDestino('quilometros');
  }
     
   }

 return (
<div>
<section className="conversor" >

  <label >escolha Unidade:</label>
  <select 
  onChange={escolherUnidade}
  value={unidade}
  >
    <option value='metro' >metro</option>
    <option value='moeda'>moeda</option>
  </select>


      <label>Quero converter:</label>
      <input  className="valor-input" 
      placeholder=" digite o valor: "
     value={valorEntrada}
      onChange={(e) => setValorEntrada(e.target.value)}
      />

               
        <label >De:</label>
      
      <select className="de-unidade"
      value={unidadeOrigem}
      onChange={(e) => setUnidadeOrigem(e.target.value)}
      >
       {opcoesAtuais.map((opcao) =>(
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
          
        </option>
   ))}
      </select>
      
    
  <input type="button" className="converter-btn" onClick={inverter} value="inverter"/>



      <label>Para:</label>
     
      <select className="para-unidade"
      value={unidadeDestino}
      onChange={(e) => setUnidadeDestino(e.target.value)}>
        {opcoesAtuais.map((opcao) =>(
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
          
        </option>
   ))}
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
 
export default Conversor
 