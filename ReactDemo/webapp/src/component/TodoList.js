import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './TodoList.css'
import TodoItem from './TodoItem'



class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            inputValue: 'hello',
            list: ['Learn English', 'Learn React'],
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
        // axios.get('/api/todolist', {})
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState(() => ({
        //             list: [...res.data]
        //         }))
        //     })
        //     .catch(() => {
        //         alert('error')
        //     })
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
                <div className={this.state.show? 'show':'hide'}>hello</div>
                <button onClick={this.handleToggle}>toggle</button>
                <br/>
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

    handleToggle(){
        this.setState((preState) => ({
            show: preState.show? false:true
        }))
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