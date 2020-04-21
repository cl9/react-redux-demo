import {
    ACTION_REQUEST_SUCCESS,
    ACTION_REQUEST_START,
    ACTION_REQUEST_FAIL,
} from './actionTypes'
import axios from 'axios'

export const startRequest = () => {
    return {
        type: ACTION_REQUEST_START,
    }
}

export const requestSuccess = (data) => {
    return {
        type: ACTION_REQUEST_SUCCESS,
        payload: data,
    }
}

export const requestFail = (error) => {
    return {
        type: ACTION_REQUEST_FAIL,
        payload: error,
    }
}

export const getComments = () => {
    return (dispatch) => {
        dispatch(startRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((result) => dispatch(requestSuccess(result)))
            .catch((e) => dispatch(requestFail(e.message)))
    }
}