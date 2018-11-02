import React from 'react'
import {Button} from 'antd'

import Child from './Child'


export default class Life extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = ()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    handleClick = ()=>{

    }

    render() {
        return (
            <div>
                <p>Life introduction</p>
                <Button onClick={this.handleAdd}>Click me add</Button>
                <button onClick={this.handleClick}>Click me</button>
                <p>{this.state.count}</p>

                <Child name={this.state.count}/>
            </div>
        );
    }
}
