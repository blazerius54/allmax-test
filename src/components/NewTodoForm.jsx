import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: '',
            date: null,
        }
    }

    handleSubmit (e) {
        const { title, description, responsible, priority, date } = this.state;
        let newTodo = { title, description, responsible, priority, date }

        this.props.addNewTodo(newTodo);
        
        this.setState({
            title: '',
            description: '',
            responsible: '',
            priority: '',
            date: null,
        });

        e.preventDefault();
        e.target.reset();
    }

    render() {
        const { title, description, responsible, priority, done, date } = this.state;

        return (
            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                <div className='single-task-form'>
                    <div className='form-section'>
                        <label>Title:</label>
                        <input type="text" defaultValue={title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    </div>
                    <div className='form-section'>
                        <label>Description:</label>
                        <textarea type="text" defaultValue={description} onChange={(e) => { this.setState({ description: e.target.value }) }} />
                    </div>
                    <div className='form-section'>
                        <label>Responsible:</label>
                        <input type="text" defaultValue={responsible} onChange={(e) => { this.setState({ responsible: e.target.value }) }} />
                    </div>
                    <div className='form-section'>
                        <label htmlFor="">Priority:</label>
                        <select
                            name='todoPriority'
                            onChange={(e) => { this.setState({ priority: e.target.value }) }}
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
                            onChange={(e) => { this.setState({ date: e.target.value }) }}
                        />
                    </div>
                </div>
                <button type='submit' className='save-btn'>add new</button>
            </form>
        )
    }
}

export default NewTodoForm;