import React, { Component } from 'react';


class AddTodo extends Component {
    state = {
        content: null
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        });
        

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            id: Math.random(),
            content: this.state.content
        }
        this.props.addTodo(item);

    }

    render() {
        return (
            <div className="todo-addtodo container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="content" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
