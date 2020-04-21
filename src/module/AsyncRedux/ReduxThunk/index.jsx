import React, { useEffect } from 'react'
import { Typography } from 'antd'
import { StepList } from 'cl9-docs-component'
import { getComments } from './actions'
import { store } from './store'
import { stepData } from './StepData'
const { Title } = Typography
store.subscribe(() => {
  console.log(store.getState())
})

function ReduxThunk() {
  useEffect(() => {
    store.dispatch(getComments())
  }, [])

  return (
    <div>
      <Title level={2}>不使用redux-thunk</Title>
      <StepList
        stepList={stepData.steps1.stepList}
        contentList={stepData.steps1.contentList}
      />
      <Title level={2}>使用redux-thunk</Title>
      <StepList
        stepList={stepData.steps2.stepList}
        contentList={stepData.steps2.contentList}
      />
      <Title level={2}>为什么使用redux-thunk</Title>
      <ul>
        <li>
          <a
            href="https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux"
            target="_blank"
          >
            Why do we need middleware for async flow in Redux?
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ReduxThunk
