import React, { useState } from 'react';


const BotaoCalc = () => {

  let [numero, setNumero] = useState(0);
  let mais = () => {}
  let menos = () => {}
  let reset = () => {}
  // const one = () => {}
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let digito = () => {}
  // let cache1 = () => {}
  // let cache2 = () => {}

  return (
    <div>
        <h1>{numero}</h1><br/>
        <button onClick={() => digito(setNumero(number[0]))}>1</button>
        <button onClick={() => digito(setNumero(number[1]))}>2</button>
        <button onClick={() => digito(setNumero(number[2]))}>3</button><br/>
        <button onClick={() => digito(setNumero(number[3]))}>4</button>
        <button onClick={() => digito(setNumero(number[4]))}>5</button>
        <button onClick={() => digito(setNumero(number[5]))}>6</button><br/>
        <button onClick={() => digito(setNumero(number[6]))}>7</button>
        <button onClick={() => digito(setNumero(number[7]))}>8</button>
        <button onClick={() => digito(setNumero(number[8]))}>9</button><br/>
        <button onClick={() => digito(setNumero(number[9]))}>0</button>
        <button onClick = {() => mais(setNumero(numero+digito))}>+</button>
        <button onClick = {() => menos(setNumero(numero-digito))}>-</button>
        <button onClick = {() => reset(setNumero(0))}>C</button>
    </div>
  )
}

export default BotaoCalc