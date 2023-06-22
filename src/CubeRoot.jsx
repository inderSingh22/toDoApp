import React, { useState } from "react";

const CubeRoot=()=>{
    const [cubeRoot,setCubeRootVal]=useState();

    const cubeRootVal=(e)=>{
        setCubeRootVal(e.target.value);
    }
    const CubeRoots=(e)=>{
        e.preventDefault();
        setCubeRootVal(cubeRoot*cubeRoot*cubeRoot);
    }
    const clearCubeRoot=()=>{
        setCubeRootVal("");
    }
    return(
        <>
        <form action="" onSubmit={CubeRoots}>
            <input type="text" onChange={cubeRootVal}/>
            <button type="submit">CubeRoot</button>
        </form>
        <button onClick={clearCubeRoot}>Celar</button>
        </>
    )
}

export default CubeRoot;