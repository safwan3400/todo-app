
import React, { Component } from 'react'
import './TodoApp.css'


export default class TodoApp extends Component {
    state = {
        input: '',
        array: []
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    storeItems = (event) => {
        event.preventDefault()
        this.setState({
            array: [...this.state.array, this.state.input],
            input: ''

        })

    }

    deleteItem = (index) => {
        this.state.array.splice(index, 1)
        
        this.setState({
            array: this.state.array
        })
    }

    render() {
        return (

            <div className='main-container'>
                <form className="input-section" action="" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>

                    <input value={this.state.input} onChange={this.handleChange} type="text" placeholder='Enter Items...' />
                </form>
                <ul>

                    {
                        this.state.array.map((value, index) =>
                            <li key={index}>
                                {value} <i className="fa fa-trash" onClick={() => this.deleteItem(index)}></i>
                            </li>
                        )
                    }

                </ul>


            </div>
        )
    }
}
