import React, { Component, Fragment } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: 'hello',
            list: ['Learn English', 'Learn React'],
        }
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        console.log('render')
        return (
            <Fragment>
                <label htmlFor="insertArea">Inputs: </label>
                <input id="insertArea"
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    className='input'
                    ref={(input) => {this.input = input}}/>
                <button onClick={this.handleBtnClick}>submit</button>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
        )
    }

    getTodoItems(){
        return this.state.list.map((item, index)=>{
            return (
                <Fragment key={item}>
                    <TodoItem content={item} index={index}
                              handleItemDelete={this.handleItemDelete}/>
                    {/*<li key={index}*/}
                    {/*onClick={this.handleItemDelete.bind(this, index)}*/}
                    {/*dangerouslySetInnerHTML={{__html:item}}></li>*/}
                </Fragment>
            )
        })
    }

    handleInputChange(e){
        // const val = e.target.value
        const val = this.input.value
        this.setState(()=>({
            inputValue: val
        }))
    }

    handleBtnClick(e){
        this.setState((preState)=>({
            list: [...preState.list, preState.inputValue],
            inputValue: ''
        }), () => {
            // console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleItemDelete(index){
        this.setState((preState)=>{
            const list = [...preState.list];
            list.splice(index, 1);
            return {
                list
            }
        })
    }
}

export default TodoList;