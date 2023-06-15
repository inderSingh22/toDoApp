import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [serachTag, updateSearchTag] = useState(false);
  const [allState, updateAllstate] = useState([]);
  const [showAll, updateAll] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setSearchTag = () => {
    updateSearchTag(true);
  }

  const addMoreItems=()=>{
    updateSearchTag(false)
  }
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = { id: Date.now(), text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      updateAllstate((prevAllState) => [[...prevAllState, newTask]]);
      setInputValue('');
    }
  };
  

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const filterTasks = (filterType) => {
    switch (filterType) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'all':
      default:
        return tasks;
    }
  };
  

  const searchTasks = () => {
    return tasks.filter((task) => task.text.toLowerCase().includes(searchValue.toLowerCase()));
  };

  const showAlldata = () => {
    updateAll((prevShowAll) => !prevShowAll);
  };
  return (
    <div>
      <h1>To-Do App</h1>
      <div>
        {!serachTag?<><input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter task" />
        <button onClick={addTask}>Add</button></>:null}
      </div>
      <div>
        {serachTag? <input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search tasks" /> : null}
      </div>
     {
      !serachTag?<ul>
      {searchValue.trim() !== ''
        ? searchTasks().map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))
        : filterTasks('all').map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>:searchValue?searchTasks().map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        )):null
     } 
      <ul>
        {
          showAll ? allState?.[0].map((ele, index) => {
            return <><li key={index}>{ele.text}</li></>
          }) : <></>
        }
      </ul>
      <div>
        {/* <button onClick={() => setTasks(filterTasks('all'))}>All</button> */}
        {serachTag?<button onClick={addMoreItems}>Add</button>:null}
        <button onClick={() => showAlldata()}>All</button>
        <button onClick={() => setSearchTag()}>Search</button>
        <button onClick={() => setTasks(filterTasks('active'))}>Active</button>
        <button onClick={() => setTasks(filterTasks('completed'))}>Completed</button>
        {/* <button onClick={() => setTasks(filterTasks('noCompleted'))}>Not Completed</button> */}
      </div>
    </div>
  );
};

export default App;
