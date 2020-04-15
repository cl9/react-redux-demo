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

const ACTION_ADD = 'ACTION_ADD'
const ACTION_MINUS = 'ACTION_MINUS'

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
}

const initialCountState = {
    count: 10
}

const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case ACTION_ADD:
            return {
                ...state,
                count: state.count + action.payload
            }
        case ACTION_MINUS:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

const store = createStore(countReducer)
store.subscribe(() => {
    console.log(store.getState())
})

function ActionCreator() {
    return (
        <div>
            <Title level={3}>在加减计数的例子上将Action由ActionCreator生成</Title>
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
            <Button onClick={() => store.dispatch(addAction(1))}>+1</Button>
            <Button onClick={() => store.dispatch(minusAction(1))}>-1</Button>
            <Button onClick={() => store.dispatch(addAction(10))}>+10</Button>
            <Button onClick={() => store.dispatch(minusAction(10))}>-10</Button>
        </div>
    )
}

export default ActionCreator

