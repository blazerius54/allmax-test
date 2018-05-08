import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTask from './Single-task';

const Tasks = (props) => {
    return (
      <div>
        <p>Todos:</p>
        {
            props.tasks.map((item, index)=>{
                return <SingleTask key={index} item={item} index={index}/>
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

export default connect(mapStateToProps)(Tasks);