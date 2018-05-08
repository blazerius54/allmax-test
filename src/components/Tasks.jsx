import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTask from './Single-task';
import { bindActionCreators } from 'redux';
import { editTodo, setTodoDone } from '../actions';

const Tasks = (props) => {
    return (
      <div>
        <p>Todos:</p>
        {
            props.tasks.map((item, index)=>{
                return <SingleTask key={index} item={item} index={index} editTodo={props.editTodo} setTodoDone={props.setTodoDone}/>
            })
        }
      </div>
    )
}

function mapStateToProps (state) {
    return {
        tasks: state
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ editTodo, setTodoDone }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);