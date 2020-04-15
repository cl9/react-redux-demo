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
    StepList
} from '../../../component'
import { stepData } from './StepData'
const { Title, Paragraph } = Typography

const ACTION_ADD = 'ACTION_ADD'
const ACTION_MINUS = 'ACTION_MINUS'

const addOneAction = {
    type: ACTION_ADD,
    payload: 1
}

const addTenAction = {
    type: ACTION_ADD,
    payload: 10
}

const minusOneAction = {
    type: ACTION_MINUS,
    payload: 1
}

const minusTenAction = {
    type: ACTION_MINUS,
    payload: 10
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

function BaseRedux() {
    return (
        <div>
            <Title level={3}>加减计数例子</Title>
            <Paragraph>可以在浏览器Console中查看state的变化</Paragraph>
            <StepList stepList={stepData.steps1.stepList}
                contentList={stepData.steps1.contentList} />
            <Button onClick={() => store.dispatch(addOneAction)}>+1</Button>
            <Button onClick={() => store.dispatch(minusOneAction)}>-1</Button>
            <Button onClick={() => store.dispatch(addTenAction)}>+10</Button>
            <Button onClick={() => store.dispatch(minusTenAction)}>-10</Button>
        </div>
    )
}

export default BaseRedux

