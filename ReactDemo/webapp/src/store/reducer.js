import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'


const defaultState = {
    show: true,
    inputValue: 'hello',
    list: ['Learn English', 'Learn React'],
    data: [
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ],
}

// reducer 可以接收state，但是绝不能修改state
// reducer 必须是纯函数（即不能有异步操作，也不能有不固定输出比如当前时间，也不能有任何副作用）
export default (state=defaultState, action) => {
    // console.log(state, action)
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.data.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.data.pop(action.index)
        return newState
    }
    return state
}