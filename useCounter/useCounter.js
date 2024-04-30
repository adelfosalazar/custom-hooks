import { useState } from 'react'

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = (valor = 1) =>{
        setCounter(counter + valor);
    }
    
    const decrementar = (valor = 1) =>{
        if(counter === 0) return;
        
        setCounter(counter - valor);
    }

    const reset = () =>{
        setCounter(initialValue);
    }

  return {
        counter,
        incrementar,
        decrementar,
        reset
    }
  
}
