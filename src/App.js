import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ToDoItem from './components/ToDoItem/ToDoItem';
import demoData from './components/demoData';
import NoItems from './components/NoItems/NoItems';
import ham from './img/ham.svg';
import plus from './img/plus.svg';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

const App = () => {
  
  let listData;
  
  if (localStorage.getItem('ToDo') === null) {
    listData = demoData;
  } else {
    listData = JSON.parse(localStorage.getItem('ToDo'));
  }

  const [state, setState] = useState(listData);
  const [value, setValue] = useState('');

  const changeValue = () => {
    if (value != '') {
      addTask(value);
      setValue('');
    }
  }

  const addTask = task => {
    let maxInd = 0;
    state.forEach(item => maxInd = Math.max(item.id));
    let newArr = [...state, {id: maxInd + 1,task, completed: false}];
    localStorage.setItem('ToDo', JSON.stringify(newArr));
    setState(newArr);
  };

  const deleteTask = id => {
    const filterArr = state.filter(item => item.id !== id);
    localStorage.setItem('ToDo', JSON.stringify(filterArr));
    setState(filterArr);
  }

  const handleChange = id => {
    const index = state.map(item => item.id).indexOf(id);
    let newArr = [...state];
    newArr[index].completed = !newArr[index].completed;
    localStorage.setItem('ToDo', JSON.stringify(newArr));
    setState(newArr);
  }
  
  const todoItems = state;
  const activeTasks = todoItems.filter(item => item.completed === false);
  const completedTasks = todoItems.filter(item => item.completed === true);
  const finalTasks = [...activeTasks,...completedTasks].map(item => {
    return (
        <ToDoItem
          key = {item.id}
          id = {'id_' + item.id}
          description = {item.task}
          completed = {item.completed}
          handleChange = {() => handleChange(item.id)}
          deleteTask = {() => deleteTask(item.id)}
        />
    )
  });
  const [active, changeActive] = useState(false);
  const showMenu = () => {
    changeActive(!active);
  } 
  return (
    <div className="App">

    <BurgerMenu 
      state={active}
      close={showMenu}
    />    
      
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header">
              <button className="hamburger" onClick={showMenu}>
                  <img src={ham} alt="" className="hamburger__img"/>
              </button>
              <h1 className="title">ToDo List</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="enter-task">
              <input className="enter-task__input" type="text" value={value} onChange={e => setValue(e.target.value)}/>
              <button className="enter-task__btn" onClick={changeValue}>
                <img src={plus} alt="" className="enter-task__img"/>
              </button>
            </div>
            <div className="items-wrapper">
              {finalTasks == '' ? <NoItems/> : finalTasks}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App;
