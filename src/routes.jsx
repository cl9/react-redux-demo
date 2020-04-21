import React from 'react'

import {
  AsyncList,
  ReduxThunk,
  ReduxSaga,
  BaseList,
  ThreePrinciple,
  ActionCreator,
  CombineReducer,
  Sync,
  Async,
  ReactList,
} from './module'
import Main from './Main'

export default [
  {
    path: '/',
    name: 'Main',
    component: () => <Main />,
  },
  {
    path: '/module/base',
    name: 'BaseRedux',
    component: () => <BaseList />,
  },
  {
    path: '/module/base/principle',
    name: 'ThreePrinciple',
    component: () => <ThreePrinciple />,
  },
  {
    path: '/module/base/actioncreator',
    name: 'ActionCreator',
    component: () => <ActionCreator />,
  },
  {
    path: '/module/base/combinereducer',
    name: 'CombineReducer',
    component: () => <CombineReducer />,
  },
  {
    path: '/module/async',
    name: 'AsyncRedux',
    component: () => <AsyncList />,
  },
  {
    path: '/module/async/thunk',
    name: 'ReduxThunk',
    component: () => <ReduxThunk />,
  },
  {
    path: '/module/async/saga',
    name: 'ReduxSaga',
    component: () => <ReduxSaga />,
  },
  {
    path: '/module/react',
    name: 'ReactRedux',
    component: () => <ReactList />,
  },
  {
    path: '/module/react/sync',
    name: 'ReactReduxSyncDemo',
    component: () => <Sync />,
  },
  {
    path: '/module/react/async',
    name: 'ReactReduxAsyncDemo',
    component: () => <Async />,
  },
]
