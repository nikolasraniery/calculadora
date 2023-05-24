import React, { useState } from 'react';



const BotaoCalc = () => {

  let [numero, setNumero] = useState(0);
  let mais = () => {}
  let menos = () => {}
  let reset = () => {}
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let digito = number.map((digito) => {
    if (digito === (1)) {
      setNumero(1);
    }else{return(0)
    }
  });

  return (
    <div>
        <h1>{numero}</h1><br/>
        <button onClick={() => digito(setNumero(digito))}>1</button>
        <button>2</button>
        <button>3</button><br/>
        <button>4</button>
        <button>5</button>
        <button>6</button><br/>
        <button>7</button>
        <button>8</button>
        <button>9</button><br/>
        <button>0</button>
        <button onClick = {() => mais(setNumero(numero+1))}>+</button>
        <button onClick = {() => menos(setNumero(numero-1))}>-</button>
        <button onClick = {() => reset(setNumero(0))}>C</button>
    </div>
  )
}

export default BotaoCalc