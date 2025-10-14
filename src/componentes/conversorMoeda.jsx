

import { useState ,useEffect} from "react";

 
   function Conversor() {
     
      
     const [unidade ,setUnidade]= useState('moeda')
      const [valorEntrada,setValorEntrada] = useState('1')
      const [unidadeOrigem,setUnidadeOrigem] = useState("USD")
      const [unidadeDestino,setUnidadeDestino] = useState("BRL")
      const [resultado,setResultado] = useState() 
 
 const opcoesMoeda = [
    { value: 'USD', label: 'Dólar (USD)' },
    { value: 'BRL', label: 'Real (BRL)' },
    { value: 'EUR', label: 'Euro (EUR)' },

  ];

 
  const opcoesMetro = [
    { value: 'metro', label: 'Metro' },
    { value: 'quilometros', label: 'Quilômetro' },
    { value: 'centimetros', label: 'Centímetro' },
  ];
  const opcoeskg = [
    { value: 'KG', label: 'KG' },
    { value: 'G', label: 'G' },
  ];

let opcoesAtuais;

      if (unidade === 'moeda') {
  opcoesAtuais = opcoesMoeda;
  
      }
      else if (unidade === 'comprimento'){
  opcoesAtuais = opcoesMetro

}else{
opcoesAtuais = opcoeskg
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
    setResultado(`${resul.toFixed(2)} ${unidadeDestino}`)
  }




    function distancia(){
      const fatoresComprimento = {
      metro: 1,
     quilometros: 1000,
     centimetros: 0.01
};   
   const valor = valorEntrada * fatoresComprimento[unidadeOrigem]
   const resul = valor / fatoresComprimento[unidadeDestino]
 
   setResultado(`${resul.toFixed(3)} ${unidadeDestino}`)
    }
 
   
    


 function peso(){
 const pesoskg = {
  KG: 1,
  G: 0.001,
 }
 const valor = valorEntrada * pesoskg[unidadeOrigem]
 const resul = valor / pesoskg[unidadeDestino]

   setResultado(`${resul} ${unidadeDestino}`)

 }





  useEffect(() => {
    
      if(unidade === 'comprimento'){
        distancia();
      }else if(unidade === 'moeda'){
        moeda()
      }
      else{
        peso()
      } 
    },[valorEntrada,unidade, unidadeOrigem ,unidadeDestino]);

   function escolherUnidade(e){
    const novaUnidade = e.target.value
     setUnidade(novaUnidade)

     if (novaUnidade === 'moeda') {
    setUnidadeOrigem('USD');
    setUnidadeDestino('BRL');

  } 
  else if(novaUnidade === 'comprimento'){
    setUnidadeOrigem('metro');
    setUnidadeDestino('quilometros');
  }
else {
    setUnidadeOrigem('KG');
    setUnidadeDestino('G')
}
   }
  function inverter(){
    setUnidadeOrigem(unidadeDestino)
    setUnidadeDestino(unidadeOrigem)
        
 }
 return (
<div>
<section className="conversor" >
  <div className="unidade">

  <label >escolha Unidade:</label>
  <select 
  
  onChange={escolherUnidade}
  value={unidade}
  >
    <option value='moeda'>moeda</option>
    <option value='comprimento'>Comprimento</option>
    <option value='peso'>KG</option>
  </select>
    </div>



      <label>Quero converter:</label>

      <input  className="valor-input" 
      placeholder=" digite o valor: "
     value={valorEntrada}
      onChange={(e) => setValorEntrada(e.target.value)}
      />





<div className="valores">
  
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
   </div>
      
    



  <input type="button" className="converter-btn" onClick={inverter} value="inverter"/>




<div className="valores">


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
   </div>
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
 