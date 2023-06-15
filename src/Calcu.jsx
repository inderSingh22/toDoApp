import React, { useState } from "react";

const Calcu=()=>{
    const [firstval,updateFirstVal]=useState();
    const [secondval,updatesecondVal]=useState();
    const [sum,updateSum]=useState();
    const firstValue=(e)=>{
        updateFirstVal(parseInt(e.target.value));
    }
    const secondVal=(e)=>{
        updatesecondVal(parseInt(e.target.value));
    }
    const handleSum=(e)=>{
        e.preventDefault();
        updateSum(firstval+secondval);
    }
return(
    <>
    <div>{sum}</div>
    <form action="" onSubmit={handleSum}>
    <input type="text" onChange={firstValue}/>
    <input type="text" onChange={secondVal}/>
    <button type="submit">Submit</button>
    </form>
    </>
)
}

export default Calcu;