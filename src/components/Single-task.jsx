import React, { Component } from 'react';


class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { title, description, responsible, priority, done } = this.props.item;
        return (
            <div className='single-task'>
                <p>Task</p>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Responsible: {responsible}</p>
                <p>Priority: {priority}</p>
            </div>
        )
    }
}

export default SingleTask;