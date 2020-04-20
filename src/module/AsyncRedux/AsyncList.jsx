import React from 'react'
import PropTypes from 'prop-types'
import {
    RouterListView
} from 'cl9-docs-component'

function AsyncList(props) {
    const list = [
        {
            title: 'Redux Thunk',
            path: '/module/async/thunk'
        },
        {
            title: 'Redux Saga',
            path: '/module/async/saga'
        },
    ]

    return (
        <RouterListView list={list} />
    )
}

AsyncList.propTypes = {

}

export default AsyncList

