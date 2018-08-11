import React, { Component, Fragment } from 'react'


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: 'hello',
            list: ['Learn English', 'Learn React'],
        }
    }

    render(){
        return (
            <div>
                <input onChange={this.handleInputChange.bind(this)}
                    value={this.state.inputValue}/>
                <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <li key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick(e){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;