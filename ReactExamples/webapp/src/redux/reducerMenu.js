import {handleActions} from 'redux-actions'


export const menuData = handleActions({
    switchMenu: (state, action) => {
        // return {...state, ...action.payload}
        console.log("in menuData reducer, action.payload=")
        console.log(action.payload)
        return {...state, menuName:action.menuName}
    }
}, {})
