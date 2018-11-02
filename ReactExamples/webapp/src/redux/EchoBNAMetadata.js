import {handleActions} from 'redux-actions'
import { createAction } from 'redux-actions'
import axios from 'axios'

import config from 'utils/config'


// action
const actionReceivedEchoCombinedList = createAction('receivedEchoCombinedList')

export const getBNACombinedMetaList = () => {
    return (dispatch, getState) => {
        axios.get(config.getBaseUrl() + '/echo/combined', {})
            .then((res) => {
                // console.log("getBNACombinedMetaList, res.data="+JSON.stringify(res.data))
                dispatch(actionReceivedEchoCombinedList(res.data['data']))
            })
            .catch(() => {
                alert('error in fetching BNA metadata')
            })
    }
}

// reducer
const defaultEchoCombinedList = []

export const echoCombinedMetaList = handleActions({
    [actionReceivedEchoCombinedList]: (state, action) => {
        // console.log("receivedEchoCombinedList reducer, state="+JSON.stringify(state))
        // console.log("receivedEchoCombinedList reducer, action="+JSON.stringify(action))
        // return {...state, ...action.payload}
        return action.payload
    }
}, defaultEchoCombinedList)
