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

    onChangeForm (propertyName, value) {
        this.setState({
            [propertyName]: value
        })
    }

    render() {
        return <Form 
        onChangeForm={this.onChangeForm.bind(this)} 
        handleSubmit={this.handleSubmit.bind(this)} 
        text={'add new'}
        />
    }
}

export default NewTodoForm;