import * as actionTypes from '../constants'
import {
    getBannersRequest,
    getShowRequest
} from '@/api/request'

// 页面级别action  
// promise.all
export const getHomeDataAction = (count) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        const [bannersResult, showResult ] = await Promise.all([
            getBannersRequest(),
            getShowRequest(count),
        ])
        // console.log(bannersResult.data.bannersList,'lolo')
        console.log(showResult,'------');
        dispatch(setBanners(bannersResult.data.bannersList))
        dispatch(setShow(showResult.data.threadlist))
        dispatch(setLoading(false))
    }
}

export const setLoading = (data) => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setBanners = (data) => ({
    type: actionTypes.SET_BANNERS,
    data
})

export const setShow = (data) => ({
    type: actionTypes.SET_SHOW,
    data
})