export const stepData = {
    steps1: {
        stepList: [
            '新增加减Action',
            '新增加减Action对应的Reducer',
            '创建Store',
            '监听state的改变',
        ],
        contentList: [{
                code: `
                const ACTION_ADD = 'ACTION_ADD'
                const ACTION_MINUS = 'ACTION_MINUS'
                
                const addOneAction = {
                    type: ACTION_ADD,
                    payload: 1
                }
                
                const addTenAction = {
                    type: ACTION_ADD,
                    payload: 10
                }`,
            },
            {
                code: `
                const initialCountState = {
                    count: 10
                }
                
                const countReducer = (state = initialCountState, action) => {
                    switch (action.type) {
                        case ACTION_ADD:
                            return {
                                ...state,
                                count: state.count + action.payload
                            }
                        case ACTION_MINUS:
                            return {
                                ...state,
                                count: state.count - action.payload
                            }
                        default:
                            return state
                    }
                }`,
            },
            'const store = createStore(countReducer)',
            {
                code: `
                store.subscribe(() => {
                    console.log(store.getState())
                })`,
            },
        ],
    },
}