import {
    AsyncList,
    ReduxThunk,
    ReduxSaga,
    BaseList,
    ThreePrinciple,
    ActionCreator,
    CombineReducer,
} from './module'
import Main from './Main'

export default [{
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/module/base',
        name: 'BaseRedux',
        component: BaseList,
    },
    {
        path: '/module/base/principle',
        name: 'ThreePrinciple',
        component: ThreePrinciple,
    },
    {
        path: '/module/base/actioncreator',
        name: 'ActionCreator',
        component: ActionCreator,
    },
    {
        path: '/module/base/combinereducer',
        name: 'CombineReducer',
        component: CombineReducer,
    },
    {
        path: '/module/async',
        name: 'AsyncList',
        component: AsyncList,
    },
    {
        path: '/module/async/thunk',
        name: 'ReduxThunk',
        component: ReduxThunk,
    },
    {
        path: '/module/async/saga',
        name: 'ReduxSaga',
        component: ReduxSaga,
    },
]