import React, { Component } from 'react';
import moment from 'moment';


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

    handleSubmit (e) {
        const { title, description, responsible, priority, done, date } = this.state;
        let newTodo = { title, description, responsible, priority, done, date, doneTime: this.props.item.doneTime }
        
        e.preventDefault();
        this.setState({isEditing: false});
        this.props.editTodo(newTodo, this.props.index)
    }

    render() {
        const { title, description, responsible, priority, done, date, doneTime } = this.props.item;
        const { isEditing } = this.state;

        return (
            <div className='single-task' onSubmit={(e)=>{this.handleSubmit(e)}}>
                {
                    !isEditing ?
                        <div className='single-task-div'>
                            <div className='task-section'>
                                <p>Title: </p> <h4 className={done?'nice':null}>{title}</h4>
                                <button className='delete-btn'>delete</button>
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
                                            <button className='nice-btn' onClick={() =>{this.setState({done: true}); this.props.setTodoDone(this.props.index)}}>done</button>
                                        </div>
                                }
                            </div>
                            
                        </div> :
                        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                            <div className='single-task-form'>
                                <div className='form-section'>
                                    <label>Title:</label>
                                    <input type="text" defaultValue={title} onChange={(e)=>{this.setState({title: e.target.value})}} />
                                </div>
                                <div className='form-section'>
                                    <label>Description:</label>
                                    <textarea type="text" defaultValue={description} onChange={(e)=>{this.setState({description: e.target.value})}} />
                                </div>
                                <div className='form-section'>
                                    <label>Responsible:</label>
                                    <input type="text" defaultValue={responsible} onChange={(e)=>{this.setState({responsible: e.target.value})}} />
                                </div>
                                <div className='form-section'>
                                    <label htmlFor="">Priority:</label>
                                    <select
                                    name='todoPriority'
                                    onChange={(e)=>{this.setState({priority: e.target.value})}}
                                    >
                                        <option></option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                                <div className='form-section'>
                                    <label htmlFor="">Date <span className='necessary'>(if necessary)</span></label>
                                    <input
                                        type="datetime-local"
                                        onChange={(e)=>{this.setState({date: e.target.value})}}
                                    />
                                </div>
                            </div>
                            <button type='submit' className='save-btn'>save</button>
                        </form>
                }
            </div>
        )
    }
}

export default SingleTask;