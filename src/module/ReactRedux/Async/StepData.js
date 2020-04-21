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
        stepList: [{
                title: '在React的根组件外包裹Provider,store属性传入定义的store',
                subTitle: 'Provider的原理是使用了React.Context',
            },
            {
                title: '将React组件用connect方法包裹成容器组件',
                subTitle: '连接React组件与 Redux store',
            },
            {
                title: '在容器组件中可以通过props获取到Redux store的state和方法',
                subTitle: '连接React组件与 Redux store',
            },
        ],
        contentList: [{
                language: 'xml',
                code: `
                <Provider store={store}>
                  <CommentList />
                </Provider>
                `,
            },
            {
                code: `
                const mapStateToProps = (state) => {
                  return {
                    loading: state.loading,
                    data: state.data,
                    error: state.error,
                  }
                }
                
                const mapDispatchToProps = (dispatch) => {
                  return {
                    getComments: () => dispatch(getComments()),
                  }
                }
                
                export default connect(mapStateToProps, mapDispatchToProps)(CommentList)                
                `,
            },
            {
                language: 'xml',
                code: `
                {props.error === '' ? (
                  <List
                    loading={props.loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={props.data.data}
                    renderItem={renderItem}
                    pagination={{
                      pageSize: 8,
                      showSizeChanger: false,
                    }}
                  />
                ) : (
                  <Alert
                    message="Error"
                    description={props.error}
                    type="error"
                    showIcon
                  />
                )}
                `,
            },
        ],
    },
}