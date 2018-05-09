import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTask from './Single-task';
import { bindActionCreators } from 'redux';
import { addNewTodo, deleteTodo, editTodo, setTodoDone } from '../actions';
import NewTodoForm from './NewTodoForm';

const Tasks = (props) => {
    return (
      <div className='all-tasks'>
        <NewTodoForm addNewTodo={props.addNewTodo} />
        <h3>Todos:</h3>
        {
            props.tasks.map((item, index)=>{
                return <SingleTask key={index} item={item} index={index}
                // visible={item.priority === props.filter}
                visible={props.filter}
                editTodo={props.editTodo} setTodoDone={props.setTodoDone} deleteTodo={props.deleteTodo}/>
            })
            // props.tasks.filter(item=> props.filter ? item.priority === props.filter : item).map((item, index)=>{
            //     return <SingleTask key={index} item={item} index={index} 
            //     editTodo={props.editTodo} setTodoDone={props.setTodoDone} deleteTodo={props.deleteTodo}/>
            // })
        }
      </div>
    )
}

function mapStateToProps (state) {
    console.log(state)
    return {
        tasks: state.tasks,
        filter: state.filter
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addNewTodo, deleteTodo, editTodo, setTodoDone }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);