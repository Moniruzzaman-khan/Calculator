import React, { useState } from "react";

const Calculator = () => {

  let [value,setValue]= useState('')

  function handle(e){
    setValue(value +e.target.innerHTML)
  }

  function equal(){
    setValue(eval(value))
  }

  function Ac(){
    setValue('')
  }

  function Del(){
    setValue(value.toString().slice(0,-1))
  }

  function perc(){
    setValue((value) / 100)
  }

  return (
    <div className="card flex items-center justify-center max-w-screen-2xl">
      <div className="card-body bg-white rounded-lg shadow-lg">
        <div className="text-black">
        <input type="text" placeholder="0" value={value} className="input input-bordered input-info w-full max-w-xs "readOnly />
        </div>
        <div className="space-x-2">
        <button onClick={Ac} className="btn btn-info">AC</button>
        <button onClick={Del} className="btn btn-error">DEL</button>
        <button onClick={perc} className="btn btn-active">%</button>
        <button onClick={handle} className="btn btn-active">/</button>
        </div>
        <div className="space-x-4">
        <button onClick={handle} className="btn btn-active">7</button>
        <button onClick={handle} className="btn btn-active">8</button>
        <button onClick={handle} className="btn btn-active">9</button>
        <button onClick={handle} className="btn btn-active">*</button>
        </div>
        <div className="space-x-4">
        <button onClick={handle} className="btn btn-active">4</button>
        <button onClick={handle} className="btn btn-active">5</button>
        <button onClick={handle} className="btn btn-active">6</button>
        <button onClick={handle} className="btn btn-active">-</button>
        </div>
        <div className="space-x-4">
        <button onClick={handle} className="btn btn-active">1</button>
        <button onClick={handle} className="btn btn-active">2</button>
        <button onClick={handle} className="btn btn-active">3</button>
        <button onClick={handle} className="btn btn-active">+</button>
        </div>
        <div className="space-x-4">
        <button onClick={handle} className="btn btn-active">00</button>
        <button onClick={handle} className="btn btn-active">0</button>
        <button onClick={handle} className="btn btn-active">.</button>
        <button onClick={equal} id="equal" className="btn btn-warning">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
