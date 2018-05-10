import React, { Component } from 'react';
import Form from './Form';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: '',
            date: null,
            error: false
        }
    }

    handleSubmit (e) {
        const { title, description, responsible, priority, date } = this.state;
        let newTodo = { title, description, responsible, priority, date };

        if(
            title !== '' && description !== '' && responsible !== '' && priority !== ''
        ) {
            this.props.addNewTodo(newTodo);
            this.setState({
                title: '',
                description: '',
                responsible: '',
                priority: '',
                date: null,
                error: false
            });
        } else {
            this.setState({
                error: 'Please, enter all info'
            })
        }

        e.preventDefault();
        e.target.reset();
    }

    onChangeForm (propertyName, value) {
        this.setState({
            [propertyName]: value
        })
    }

    render() {

        const { error } = this.state;

        return (
            <div className='single-task'>
                <h2>Add your todo:</h2>
                <Form
                    onChangeForm={this.onChangeForm.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    text={'add new'}
                />
                {error && <div className='error'> {error} </div>}
            </div>
        )
    }
}

export default NewTodoForm;