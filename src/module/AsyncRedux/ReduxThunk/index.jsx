import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'antd'
import { HighlightCode } from 'cl9-docs-component'
import axios from 'axios'
import { startRequest, requestSuccess, requestFail } from './actions'
import { store } from './store'
const { Title } = Typography
store.subscribe(() => {
  console.log(store.getState())
})

function ReduxThunk() {
  // useEffect(() => {
  //   store.dispatch(startRequest())
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/comments')
  //     .then((result) => store.dispatch(requestSuccess(result)))
  //     .catch((e) => console.log(e))
  // }, [])

  return (
    <div>
      <Title level={3}>使用redux-thunk处理异步action</Title>
      <HighlightCode>
        {`
                const addAction = addend => {
                    return {
                        type: ACTION_ADD,
                        payload: addend
                    }
                }
                
                const minusAction = subtracted => {
                    return {
                        type: ACTION_MINUS,
                        payload: subtracted
                    }
                }`}
      </HighlightCode>
    </div>
  )
}

export default ReduxThunk
