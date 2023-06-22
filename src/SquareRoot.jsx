import React, { useState } from "react";

const SquareRoot=()=>{
    const [SquareRoot,setSquareRoot]=useState();

    const squareVal=(e)=>[
        setSquareRoot(e.target.value)
    ]

    const cheackSquareRoot=(event)=>{
        event.preventDefault();
        setSquareRoot(SquareRoot*SquareRoot);
    }
    const clearSquareRoot=()=>{
        setSquareRoot("");
    }
    return(
        <>
        <form action="" onSubmit={cheackSquareRoot}>
        <input type="text" onChange={squareVal} value={SquareRoot}/>
        <button type="submit">Answer</button>
        </form>
        <button onClick={clearSquareRoot}>Celar</button>
        </>
    )
}

export default SquareRoot;