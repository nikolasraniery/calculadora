import React, { useState } from 'react';


const BotaoCalc = () => {

  //Variáveis de Alteração de Estado
  const [numero, setNumero] = useState(0);
  const [valorAnterior, setValorAnterior] = useState(0);
  const [soma, setSoma] = useState(0);
  const [subtracao, setSubtracao] = useState(0);
  // const [setResultado] = useState(0);

  //Váriaveis de Operações (+, -, C e =)
  function mais() {
    setValorAnterior(numero);
    setNumero(0);
  }
  const menos = () => {
    setValorAnterior(numero);
    setNumero(0);
  };
  const reset = () => {
    setNumero(0);
  };
  let gerarResultado = () => {

    setSoma(valorAnterior + numero);
    setNumero(soma);
    

    setSubtracao(valorAnterior - numero);
    setNumero(subtracao);
    setSubtracao(0);
  };

  //Variável Para Aparecerem Vários Digitos
  const digito = (digito) => {
    setNumero(numero * 10 + digito);
  };

  return (
    <div>
        <h1>{numero}</h1><br/>
        <button onClick = {() => digito(1)}>1</button>
        <button onClick = {() => digito(2)}>2</button>
        <button onClick = {() => digito(3)}>3</button><br/>
        <button onClick = {() => digito(4)}>4</button>
        <button onClick = {() => digito(5)}>5</button>
        <button onClick = {() => digito(6)}>6</button><br/>
        <button onClick = {() => digito(7)}>7</button>
        <button onClick = {() => digito(8)}>8</button>
        <button onClick = {() => digito(9)}>9</button><br/>
        <button onClick = {() => digito(0)}>0</button>
        <button onClick = {mais}>+</button>
        <button onClick = {menos}>-</button>
        <button onClick = {reset}>C</button>
        <button onClick = {gerarResultado}>=</button>
    </div>
  );
};

export default BotaoCalc