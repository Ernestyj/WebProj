import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import {Input, Button, List} from 'antd'
import axios from 'axios'

// import './TodoList.css'
import TodoItem from './TodoItem'
import store from '../store/index'
import {getListInputChangeAction, getListAddItemAction, getListItemDeleteAction} from '../store/actionCreators'


class TodoList extends Component {

    constructor(props){
        super(props);
        console.log(store.getState())
        this.state = store.getState()
        this.handleToggle = this.handleToggle.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleListInputChange = this.handleListInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleListBtnClick = this.handleListBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
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
                <br/>
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
                <br/>
                <br/>
                <br/>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input
                        placeholder={'TODO INFO'}
                        value={this.state.inputValue}
                        onChange={this.handleListInputChange}
                        style={{width: '500px'}}/>
                    <Button onClick={this.handleListBtnClick}
                        type={'primary'}>Submit</Button>
                    <List style={{marginTop: '10px', width: '600px'}}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.data}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handleListItemDelete.bind(this, index)}>{item}</List.Item>
                        )}
                    />
                </div>
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

    handleStoreChange(){
        // console.log('store changed')
        this.setState(store.getState())
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

    handleListInputChange(e){
        const action = getListInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick(e){
        this.setState((preState)=>({
            list: [...preState.list, preState.inputValue],
            inputValue: ''
        }), () => {
            // console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleListBtnClick(e){
        const action = getListAddItemAction()
        store.dispatch(action)
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

    handleListItemDelete(index){
        const action = getListItemDeleteAction(index)
        store.dispatch(action)
    }
}

export default TodoList;