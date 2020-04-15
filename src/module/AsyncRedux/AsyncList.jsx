import React from 'react'
import PropTypes from 'prop-types'
import {
    ListView
} from '../../component'

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
        <ListView list={list} />
    )
}

AsyncList.propTypes = {

}

export default AsyncList

