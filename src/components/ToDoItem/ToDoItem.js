import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoItem.scss';
import del from '../../img/del.svg';

const ToDoItem = props => {
    return (
        <div className="todo-item">
            <label 
                htmlFor={props.id}
                className={props.completed == true ? 'thr' : ''}
            >
                <input 
                    type="checkbox" 
                    className="checkbox"
                    onChange={props.handleChange} 
                    id={props.id} 
                    defaultChecked={props.completed}
                />
                <span className="fake"></span>
                <span className="text">{props.description}</span>
            </label>
            <button className="del-btn" onClick={props.deleteTask}>
                <img src={del} alt="" className="del-btn__img"/>
            </button>
        </div>
    )
}

export default ToDoItem;