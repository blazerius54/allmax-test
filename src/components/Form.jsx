import React, { Component } from 'react';

class From extends Component {
    // submitForm (e) {
        
    // } 

    render() {

        const { onChangeForm, handleSubmit, text } = this.props;

        const title = this.props.title || '';
        const description = this.props.description || '';
        const responsible = this.props.responsible || '';


        return (
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className='single-task-form'>
                    <div className='form-section'>
                        <label>Title:</label>
                        <input type="text" defaultValue={title} onChange={(e) => onChangeForm('title', e.target.value)} />
                    </div>
                    <div className='form-section'>
                        <label>Description:</label>
                        <textarea type="text" defaultValue={description} onChange={(e) => onChangeForm('description', e.target.value)} />
                    </div>
                    <div className='form-section'>
                        <label>Responsible:</label>
                        <input type="text" defaultValue={responsible} onChange={(e) => onChangeForm('responsible', e.target.value)} />
                    </div>
                    <div className='form-section'>
                        <label htmlFor="">Priority:</label>
                        <select
                            name='todoPriority'
                            onChange={(e) => onChangeForm('priority', e.target.value)}
                        >
                            <option></option>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className='form-section'>
                        <label htmlFor="">Date <span className='necessary'>(if necessary)</span></label>
                        <input
                            type="datetime-local"
                            onChange={(e) => onChangeForm('date', e.target.value)}
                        />
                    </div>
                </div>
                <button type='submit' className='save-btn'>{text}</button>
            </form>
        )
    }
}

export default From;