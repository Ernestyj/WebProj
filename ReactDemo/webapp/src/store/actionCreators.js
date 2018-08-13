import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from '../store/actionTypes'


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