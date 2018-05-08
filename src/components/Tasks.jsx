import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTask from './Single-task';
import { editTodo } from '../actions';
import { bindActionCreators } from 'redux';

const Tasks = (props) => {
    return (
      <div>
        <p>Todos:</p>
        {
            props.tasks.map((item, index)=>{
                return <SingleTask key={index} item={item} index={index} editTodo={props.editTodo}/>
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
    return bindActionCreators({ editTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);