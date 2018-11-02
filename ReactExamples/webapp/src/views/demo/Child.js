import React from 'react'
import {connect} from 'react-redux'

// import {getBNACombinedMetaList} from '../../redux/actions/actionBNAMeta'


// @connect(
//     (state) => ({
//         echoCombinedMetaList: state.echoCombinedMetaList,
//     })
// )

export default class Child extends React.Component {
    constructor(props){
        super(props)
        this.props = {
            name: 'Jack'
        }
        this.state = {
            data: [],
            loading: true
        };
    }

    componentWillMount(){
        console.log('componentWillMount')
        // this.props.dispatch(getBNACombinedMetaList())
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

    render() {
        // const {echoCombinedMetaList} = this.props
        // console.log(echoCombinedMetaList)
        return (
            <div>
                <p>This is child component.</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}
