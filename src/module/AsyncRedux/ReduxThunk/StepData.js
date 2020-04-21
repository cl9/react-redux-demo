export const stepData = {
    steps1: {
        stepList: [
            '新增网络请求的三个状态的同步Action(START、SUCCESS、FAIL)',
            '新增对应的Reducer',
            '创建Store',
            '使用axios获取接口数据',
            '监听state的改变',
            '查看控制台打印的数据',
        ],
        contentList: [{
                code: `
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
                }`,
            },
            {
                code: `
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
                }`,
            },
            {
                code: `
                import { createStore } from 'redux'
                import { asyncReducer } from './reducers'

                export const store = createStore(asyncReducer)
                `,
            },
            {
                code: `
                () => {
                  store.dispatch(startRequest())
                  axios
                    .get('https://jsonplaceholder.typicode.com/comments')
                    .then(result => store.dispatch(requestSuccess(result)))
                    .catch(e => store.dispatch(requestFail(e.message)))
                }`,
            },
            {
                code: `
                store.subscribe(() => {
                    console.log(store.getState())
                })`,
            },
            {
                code: `
                {loading: true, data: Array(0), error: ""}

                {loading: false, data: {…}, error: ""}
                `,
            },
        ],
    },
    steps2: {
        stepList: [
            '新增网络请求的三个状态的同步Action(START、SUCCESS、FAIL)并添加获取接口数据的异步Action',
            '新增对应的Reducer(和不使用redux-thunk相比没有变化)',
            '创建Store',
            'dispatch获取接口数据的异步Action',
            '监听state的改变(和不使用redux-thunk相比没有变化)',
            '查看控制台打印的数据',
        ],
        contentList: [{
                code: `
                ...
                
                export const getComments = () => {
                    return (dispatch) => {
                        dispatch(startRequest())
                        axios
                            .get('https://jsonplaceholder.typicode.com/comments')
                            .then((result) => dispatch(requestSuccess(result)))
                            .catch((e) => dispatch(requestFail(e.message)))
                    }
                }
                `,
            },
            {
                code: `
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
                `,
            },
            {
                code: `
                import { createStore, applyMiddleware } from 'redux'
                import { asyncReducer } from './reducers'
                import thunk from 'redux-thunk'
                
                export const store = createStore(asyncReducer, applyMiddleware(thunk))
                `,
            },
            {
                code: `
                () => {
                  store.dispatch(getComments())
                }`,
            },
            {
                code: `
                store.subscribe(() => {
                    console.log(store.getState())
                })`,
            },
            {
                code: `
                {loading: true, data: Array(0), error: ""}

                {loading: false, data: {…}, error: ""}
                `,
            },
        ],
    },
}