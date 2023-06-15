import React, { useState } from "react";
import SearchItem from './SearchItem';
const AddAny=()=>{
    const [newTask,updateNewTask]=useState({});
    const [setName,updatesetName]=useState();
    const [allTaskList,updateAllTaskList]=useState([{}]);
    
    const taskName=(e)=>{
        updatesetName(e.target.value)
        updateNewTask({
            ...newTask,
            [e.target.name] : e.target.value
          })
    }

    const addTask=(e)=>{
        e.preventDefault();
        // updateAllTaskList(current => [...current, newTask]);
        updateAllTaskList({
            ...newTask,
            [newTask]:newTask
    })
        console.log(allTaskList)
    }
    return(
        <>
        <div>{JSON.stringify(newTask)}</div>
        <div>{setName}</div>
        <form onSubmit={addTask}>
            <input type="text" name={setName}  onChange={taskName}/>
            <button type="submit">ADD</button>
        </form>
        {/* {allTaskList.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })} */}
      <SearchItem />
        </>
    )
}

export default AddAny;