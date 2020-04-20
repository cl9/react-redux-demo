import {
  ACTION_REQUEST_SUCCESS,
  ACTION_REQUEST_START,
  ACTION_REQUEST_FAIL
} from './actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: ''
}

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case ACTION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }
    case ACTION_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}
