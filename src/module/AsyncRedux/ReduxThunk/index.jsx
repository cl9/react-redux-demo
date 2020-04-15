import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Typography
} from 'antd'
import {
    createStore
} from 'redux'
import {
    HighlightCode
} from '../../../component'
const { Title } = Typography

function ReduxThunk() {
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
                }`
                }
            </HighlightCode>
        </div>
    )
}

export default ReduxThunk

