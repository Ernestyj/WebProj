import axios from 'axios'

import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from '../store/actionTypes'


export const getListInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getListAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getListItemDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:3004/v1/todolist', {})
            .then((res) => {
                // console.log(res.data)
                const action = initListAction(res.data)
                dispatch(action)
            })
            .catch(() => {
                // alert('error')
            })
    }
}