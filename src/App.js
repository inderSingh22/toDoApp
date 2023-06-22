import React, { useEffect, useState } from 'react';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchTag, updateSearchTag] = useState(false);
  const [error, setError] = useState(false);
  const [toggle,setToggel]=useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setSearchTag = () => {
    updateSearchTag(true);
  };

  const addMoreItems = () => {
    updateSearchTag(false);
    setSearchValue('');
  };

  const addTask = () => {
    if (inputValue) {
      if (inputValue.trim() !== '') {
        const newTask = { id: Date.now(), text: inputValue, completed: false };
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        setInputValue('');
      }
      setError(false);
    } else {
      setError(true);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  
const toggleTaskStatus = (taskId) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  const checkedTasks = updatedTasks.filter((task) => task.completed);
  const uncheckedTasks = updatedTasks.filter((task) => !task.completed);
  const reorderedTasks = uncheckedTasks.concat(checkedTasks);

  let newArr = [];
  let obj;
  if (l_data) {
    for (let i = 0; i < l_data.length; i++) {
      if (taskId === l_data[i].id) {
         obj = {
          id: l_data[i].id,
          text: l_data[i].text,
          completed: l_data[i].completed ? false : true,
        };
      } else {
         obj = {
          id: l_data[i].id,
          text: l_data[i].text,
          completed: l_data[i].completed,
        };
      }

      newArr.push(obj);
    }
  }

  const checkedNewArr = newArr.filter((task) => task.completed);
  const uncheckedNewArr = newArr.filter((task) => !task.completed);
  const reorderedNewArr = uncheckedNewArr.concat(checkedNewArr);

  setTasks(reorderedTasks);
  setToggel(reorderedNewArr)
  localStorage.setItem('tasks', JSON.stringify(reorderedNewArr));
};

  const filterTasks = (filterType) => {
    let tasksss = localStorage.getItem('tasks');
    let AllTasks = JSON.parse(tasksss);
    switch (filterType) {
      case 'active':
        return AllTasks.filter((task) => !task.completed);
      case 'completed':
        return AllTasks.filter((task) => task.completed);
      case 'all':
        return AllTasks ? AllTasks : tasks.filter((task) => task);
      default:
        return tasks;
    }
  };

  let l_data = JSON.parse(localStorage.getItem('tasks'));

  const searchTasks = () => {
    return l_data.filter((task) => task.text.toLowerCase().includes(searchValue.toLowerCase()));
  };

  return (
    <div className="app">
      <h1 className="app-title">To-Do App</h1>
      <div className="input-container">
        {!searchTag ? (
          <>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter task" />
            <button className="add-button" onClick={addTask}>
              Add
            </button>
          </>
        ) : null}
        {error ? <small className="error-message">Enter item name</small> : null}
      </div>
      <div className="search-container">
        {searchTag ? <input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search tasks" /> : null}
      </div>
      {!searchTag ? (
        console.log("done ")
        // <ul className="task-list">
        //   {
        //     filterTasks().map((task) => (
        //       <li key={task.id} className="task-item">
        //         <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
        //         <span className={task.completed ? 'task-text completed' : 'task-text abc'} style={{textTransform:"capitalize"}}>{task.text}</span>
        //       </li>
        //     ))
        //   }
        //   </ul>
      ) : searchValue ? (
        searchTasks().map((task) => (
          <li key={task.id} className="task-item">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
            <span className={task.completed ? 'task-text completed' : 'task-text'} style={{textTransform:"capitalize"}}>{task.text}</span>
          </li>
        ))
      ) : null}

      <div className="filter-buttons">
        {searchTag ? null : (
          <div>
          <button className="filter-button" onClick={() => setTasks(filterTasks('all'))}>
            All
          </button>
          <div>
          <ul className="task-list">
          {
            filterTasks().map((task) => (
              <li key={task.id} className="task-item">
                <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
                <span className={task.completed ? 'task-text completed' : 'task-text abc'} style={{textTransform:"capitalize"}}>{task.text}</span>
              </li>
            ))
          }
          </ul>
          </div>
          </div>
        )}
        {searchTag ? (
          <button className="add-more-button" onClick={addMoreItems}>
            Add More Items
          </button>
        ) : null}
        <button className="filter-button" onClick={() => setSearchTag()}>
          Search
        </button>
        {searchTag ? null : (
          <>
          <div>
            <button className="filter-button">
              Active
            </button>
            <div>
            {
              toggle?.map((task,key) => (
                task.completed == false? <li key={task.id} className="task-item">
                 <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
                <span className={task.completed ? 'task-text completed' : 'task-text abc'} style={{textTransform:"capitalize"}}>{task.text}</span>
                 </li>:null
              ))
            }
            </div>
          </div>
          <div>
            <button className="filter-button">
              Completed
            </button>
            <div>
                  {
                    toggle?.map((task,key) => (
                      task.completed == true? <li key={task.id} className="task-item">
                      <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
                      <span className={task.completed ? 'task-text completed' : 'task-text abc'} style={{textTransform:"capitalize"}}>{task.text}</span>
                      </li>:null
                    ))
                  }
            </div>
          </div> 
          </>
        )}
      </div>
    </div>
  );
};
export default App;
