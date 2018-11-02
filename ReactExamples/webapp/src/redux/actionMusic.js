import { createAction } from 'redux-actions'

// import { createAjaxAction } from '../../utils/index'
import {fetchJSONByGet} from "../utils/ajax";


musicList = fetchJSONByGet('http://tingapi.ting.baidu.com/v1/restserver/ting')

export const requestMusicList = createAction('request music list')
export const receiveMusicList = createAction('receive music list')

const createAjaxAction = (api, startAction, endAction) => (data, cb) =>
    (dispatch) => {
        let respon
        dispatch(startAction(data))
        return new Promise((resolve, reject) => {
            api(data)
                .then(checkStatus)
                .then(response => response.json())
                .then(response => {
                    respon = response
                    dispatch(endAction({ req: data, res: response }))
                })
                .then(() => {
                    if (respon.status === 1) {
                        cb && cb(respon)
                    }
                })
                .catch(catchError)
        })
    }

export const fetchMusicList = createAjaxAction(musicList, requestMusicList, receiveMusicList)
