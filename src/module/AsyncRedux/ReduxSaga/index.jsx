import React from 'react'
import { Button, Typography } from 'antd'
import { createStore } from 'redux'
import { HighlightCode } from 'cl9-docs-component'
const { Title } = Typography

function ReduxSaga(props) {
  return (
    <div>
      <Title level={3}>使用redux-saga处理异步action</Title>
    </div>
  )
}

export default ReduxSaga
