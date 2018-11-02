import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import * as todoList from './reducerTodoList'
import * as musicList from './reducerMusic'
import * as menuData from './reducerMenu'
import {echoCombinedMetaList} from './EchoBNAMetadata'


const rootReducer = combineReducers({
    router: routerReducer,
    ...todoList,
    ...musicList,
    ...menuData,
    echoCombinedMetaList,
})

export default rootReducer
