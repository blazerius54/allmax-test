import React, { Component } from 'react';
import moment from 'moment';
import Form from './Form';

class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            title: '',
            description: '',
            responsible: '',
            priority: '',
            date: null,
            done: null
        }
    }

    componentDidMount () {
        const { title, description, responsible, priority, done, date } = this.props.item;

        this.setState({
            title,
            description,
            responsible,
            priority, 
            done,
            date
        })
    }

    onChangeForm (propertyName, value) {
        this.setState({
            [propertyName]: value
        })
    }

    handleSubmit (e) {
        const { title, description, responsible, priority, done, date } = this.state;
        let newTodo = { title, description, responsible, priority, done, date, doneTime: this.props.item.doneTime }
        
        e.preventDefault();
        this.setState({isEditing: false});
        this.props.editTodo(newTodo, this.props.index)
    }
    
    render() {
        console.log(this.props.visible);
        const { deleteTodo, setTodoDone, index } = this.props;
        const { title, description, responsible, priority, done, date, doneTime } = this.props.item;
        const { isEditing } = this.state;

        return (
            // <div className='single-task' onSubmit={(e)=>{this.handleSubmit(e)}} style={this.props.visible === true || 'all' ? {display: 'block'} : {display: 'none'}}>
            <div className='single-task' onSubmit={(e)=>{this.handleSubmit(e)}} style={this.props.visible === priority || this.props.visible === 'all' ? {display: 'block'} : {display: 'none'}}>
                {
                    !isEditing ?
                        <div className='single-task-div'>
                            <div className='task-section'>
                                <p>Title: </p> <h4 className={done?'nice':null}>{title}</h4>
                                <button className='delete-btn' onClick={()=>deleteTodo(index)}>delete</button>
                            </div>
                            <div className='task-section'>
                                <p>Description: </p> <p>{description}</p>
                            </div>
                            <div className='task-section'>
                                <p>Responsible: </p> <p>{responsible}</p>
                            </div>
                            <div className='task-section'>
                                <p>Priority: </p> <p>{priority}</p> 
                            </div>
                            {
                                date && 
                                <div className='task-section'>
                                    <p>Deadline:</p> <p>{moment(new Date(date)).format(" MMMM Do, HH:mm")}</p>
                                </div>
                            }
                            <div className='task-section'>
                                <button onClick={()=>this.setState({isEditing: true})}>edit</button>
                                {
                                    doneTime ?
                                        <div className='done-time'>
                                            Done time: { moment(new Date(doneTime)).format(" MMMM Do, HH:mm") }
                                        </div> :
                                        <div>
                                            <button className='nice-btn' onClick={() =>{this.setState({done: true}); setTodoDone(index)}}>done</button>
                                        </div>
                                }
                            </div>
                        </div> :
                        <Form 
                        onChangeForm={this.onChangeForm.bind(this)} 
                        handleSubmit={this.handleSubmit.bind(this)}
                        {...this.state}
                        text={'save'}
                        />
                }
            </div>
        )
    }
}

export default SingleTask;