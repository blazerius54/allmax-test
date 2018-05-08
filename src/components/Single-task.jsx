import React, { Component } from 'react';


class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            title: '',
            description: '',
            responsible: '',
            priority: ''
        }
    }

    componentDidMount () {
        const { title, description, responsible, priority, done } = this.props.item;

        this.setState({
            title,
            description,
            responsible,
            priority
        })
    }

    handleSubmit (e) {
        const { title, description, responsible, priority } = this.state;
        let newTodo = {
            title, description, responsible, priority
        }
        
        e.preventDefault();
        this.setState({isEditing: false});
        this.props.editTodo( newTodo, this.props.index)
    }

    render() {
        const { title, description, responsible, priority, done } = this.props.item;
        const { isEditing } = this.state;

        return (
            <div className='single-task' onSubmit={(e)=>{this.handleSubmit(e)}}>
                <p>Task</p>
                {
                    !isEditing ?
                        <div className='single-task-div'>
                            <div className='task-section'>
                                <p className={done?'nice':null}>Title: </p> <p>{title}</p>
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
                            <button onClick={()=>this.setState({isEditing: true})}>Edit</button>
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
                                {/* <button onClick={()=>this.setState({isEditing: false})}>Edit</button> */}
                                <div className='form-section'>
                                    <label htmlFor="">Priority:</label>
                                    <select
                                    name='todoPriority'
                                    // ref={(select) => { this.selectPriority = select; }}
                                    // value={priority}
                                    onChange={(e)=>{this.setState({priority: e.target.value})}}
                                    >
                                        <option></option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                                
                            </div>
                            <button type='submit'>Save</button>
                        </form>
                }
            </div>
        )
    }
}

export default SingleTask;