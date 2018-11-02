import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'


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
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            return newState
        case ADD_TODO_ITEM:
            newState.data.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case DELETE_TODO_ITEM:
            newState.data.pop(action.index)
            return newState
        case INIT_LIST_ACTION:
            newState.data = action.data
            return newState
    }
    return state
}