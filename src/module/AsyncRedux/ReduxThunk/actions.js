import { dispatch } from 'redux'
import {
    ACTION_REQUEST_SUCCESS,
    ACTION_REQUEST_START,
    ACTION_REQUEST_FAIL,
} from './actionTypes'

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