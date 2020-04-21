import React, { useState, useEffect } from 'react'
import { List, Alert, Typography, Divider } from 'antd'
import { Provider } from 'react-redux'
import { HighlightCode, StepList } from 'cl9-docs-component'
import { getComments } from './actions'
import { store } from './store'
import { stepData } from './StepData'
import CommentList from './CommentList'
const { Title } = Typography

function Async() {
  const [comments, setComments] = useState(store.getState())

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setComments(store.getState())
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    store.dispatch(getComments())
  }, [])

  const renderItem = (item, index) => (
    <List.Item key={index}>{item.name}</List.Item>
  )

  return (
    <div>
      <Title level={2}>不使用react-redux实现在react中使用redux</Title>
      <HighlightCode>
        {`
          const [comments, setComments] = useState(store.getState())

          useEffect(() => {
            let unsubscribe = store.subscribe(() => {
              setComments(store.getState())
            })
            return () => unsubscribe()
          }, [])
        
          useEffect(() => {
            store.dispatch(getComments())
          }, [])
        `}
      </HighlightCode>
      {comments.error === '' ? (
        <List
          loading={comments.loading}
          itemLayout="vertical"
          size="large"
          dataSource={comments.data.data}
          renderItem={renderItem}
          pagination={{
            pageSize: 8,
            showSizeChanger: false,
          }}
        />
      ) : (
        <Alert
          message="Error"
          description={comments.error}
          type="error"
          showIcon
        />
      )}
      <Divider />
      <Title level={2}>使用react-redux实现在react中使用redux</Title>
      <StepList
        stepList={stepData.steps2.stepList}
        contentList={stepData.steps2.contentList}
      />
      <Provider store={store}>
        <CommentList />
      </Provider>
    </div>
  )
}

export default Async
