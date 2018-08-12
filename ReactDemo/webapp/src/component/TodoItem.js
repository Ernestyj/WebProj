import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    componentWillReceiveProps(){
        //若子组件从父组件接受了参数，只要父组件的render执行了，子组件此函数就会执行
        //ex.如果此组件第一次被渲染，不会执行；之后被渲染，会执行
        console.log('TodoItem-componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('TodoItem-shouldComponentUpdate')
        return nextProps.content !== this.props.content;
    }

    componentWillUnmount(){
        console.log('TodoItem-componentWillUnmount')
    }

    render(){
        const {content} = this.props
        return (
            <Fragment>
                <li onClick={this.handleBtnClick}>{content}</li>
            </Fragment>
        )
    }

    handleBtnClick(e){
        const {handleItemDelete, index} = this.props
        handleItemDelete(index)
    }

}

TodoItem.propTypes = {
    //PropTypes.arrayOf(PropTypes.string, PropTypes.number),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleItemDelete: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;