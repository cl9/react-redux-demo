import React from 'react'
import PropTypes from 'prop-types'
import { RouterListView } from 'cl9-docs-component'

function ReactList(props) {
  const list = [
    {
      title: 'redux与react结合之同步案例',
      path: '/module/react/sync',
    },
    {
      title: 'redux与react结合之异步案例',
      path: '/module/react/async',
    },
  ]

  return <RouterListView list={list} />
}

ReactList.propTypes = {}

export default ReactList
