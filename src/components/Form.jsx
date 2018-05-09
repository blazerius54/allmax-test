import React, { Component } from 'react';

const From = (props) => {

    const title = props.title || '';
    const description = props.description || '';
    const responsible = props.responsible || '';

    return (
        <form onSubmit={(e) => { props.handleSubmit(e) }}>
        <div className='single-task-form'>
            <div className='form-section'>
                <label>Title:</label>
                {/* <input type="text" defaultValue={title} onChange={(e) => { this.setState({ title: e.target.value }) }} /> */}
                <input type="text" defaultValue={title} onChange={(e)=>props.onChangeForm('title', e.target.value)} />
            </div>
            <div className='form-section'>
                <label>Description:</label>
                <textarea type="text" defaultValue={description} onChange={(e)=>props.onChangeForm('description', e.target.value)} />
            </div>
            <div className='form-section'>
                <label>Responsible:</label>
                <input type="text" defaultValue={responsible} onChange={(e)=>props.onChangeForm('responsible', e.target.value)} />
            </div>
            <div className='form-section'>
                <label htmlFor="">Priority:</label>
                <select
                    name='todoPriority'
                    onChange={(e)=>props.onChangeForm('priority', e.target.value)}
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
                    onChange={(e)=>props.onChangeForm('date', e.target.value)}
                />
            </div>
        </div>
        <button type='submit' className='save-btn'>{props.text}</button>
    </form>
    )
}

export default From;