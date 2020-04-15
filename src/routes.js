import {
    AsyncList,
    ReduxThunk,
    ReduxSaga,
    BaseList,
    ThreePrinciple,
    ActionCreator,
    CombineReducer
} from './module'
import Main from './Main'

export default [{
        path: "/",
        name: "Main",
        Component: Main
    }, {
        path: "/module/base",
        name: "BaseRedux",
        Component: BaseList
    }, {
        path: "/module/base/principle",
        name: "ThreePrinciple",
        Component: ThreePrinciple
    }, {
        path: "/module/base/actioncreator",
        name: "ActionCreator",
        Component: ActionCreator
    }, {
        path: "/module/base/combinereducer",
        name: "CombineReducer",
        Component: CombineReducer
    },
    {
        path: "/module/async",
        name: "AsyncList",
        Component: AsyncList
    },
    {
        path: "/module/async/thunk",
        name: "ReduxThunk",
        Component: ReduxThunk
    },
    {
        path: "/module/async/saga",
        name: "ReduxSaga",
        Component: ReduxSaga
    },
];