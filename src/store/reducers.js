import { combineReducers } from "redux";
import * as actionTypes from './constants'

const initialState = {
    loading: true,
    bannerslist: [],
    showlist: []
}

const loadingReducer = (state = initialState.loading, action) => {
    switch(action.type) {
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const bannersReducer = (state = initialState.bannerslist, action) => {
    switch(action.type) {
        case actionTypes.SET_BANNERS:
            return {
                ...state,
                bannerslist: action.data
            }
            break
        default:
            return state;
    }
}

const showReducer = (state = initialState.showlist, action) => {
    switch(action.type) {
        case actionTypes.SET_SHOW:
            return {
                ...state,
                showlist: action.data
            }
            break
        default:
            return state
    }
}


export default combineReducers({
    loading: loadingReducer,
    bannerslist: bannersReducer,
    showlist: showReducer,
})