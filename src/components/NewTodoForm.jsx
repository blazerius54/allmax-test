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

    validate() {
        const { title, description, responsible, priority, date } = this.state;
        if(
            title !== '' || description !== '' 
        ) {
            this.setState({
                error: false
            })
        }
    }

    handleSubmit (e) {
        this.validate();
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

        return <div className='single-task'><Form 
        onChangeForm={this.onChangeForm.bind(this)} 
        handleSubmit={this.handleSubmit.bind(this)} 
        text={'add new'}
        />
        { error && <div className='error'> {error} </div> }
        </div>
    }
}

export default NewTodoForm;