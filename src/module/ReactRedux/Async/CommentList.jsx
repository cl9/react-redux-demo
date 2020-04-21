import React from 'react'
import { List, Alert, Typography, Divider } from 'antd'
import { connect } from 'react-redux'
import { getComments } from './actions'

function CommentList(props) {
  const renderItem = (item, index) => (
    <List.Item key={index}>{item.name}</List.Item>
  )
  return (
    <div>
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
    </div>
  )
}

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
