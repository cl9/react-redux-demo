import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Typography,
    Divider
} from 'antd'
import {
    createStore,
    combineReducers
} from 'redux'
import {
    StepList
} from '../../../component'
import { stepData } from './StepData'
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

const initialCountAMState = {
    amCount: 10
}

const countAMReducer = (state = initialCountAMState, action) => {
    switch (action.type) {
        case ACTION_ADD:
            return {
                ...state,
                amCount: state.amCount + action.payload
            }
        case ACTION_MINUS:
            return {
                ...state,
                amCount: state.amCount - action.payload
            }
        default:
            return state
    }
}

const ACTION_MULTIPLY = 'ACTION_MULTIPLY'
const ACTION_DIVIDE = 'ACTION_DIVIDE'

const multiplyAction = multiplicand => {
    return {
        type: ACTION_MULTIPLY,
        payload: multiplicand
    }
}

const divideAction = dividend => {
    return {
        type: ACTION_DIVIDE,
        payload: dividend
    }
}

const initialCountMDState = {
    mdCount: 100
}

const countMDReducer = (state = initialCountMDState, action) => {
    switch (action.type) {
        case ACTION_MULTIPLY:
            return {
                ...state,
                mdCount: state.mdCount * action.payload
            }
        case ACTION_DIVIDE:
            return {
                ...state,
                mdCount: state.mdCount / action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    countAMReducer,
    countMDReducer
})
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

function CombineReducer() {
    return (
        <div>
            <Title level={3}>在加减计数的例子上新增乘除</Title>
            <StepList stepList={stepData.steps1.stepList}
                contentList={stepData.steps1.contentList} />
            <Button onClick={() => store.dispatch(addAction(1))}>+1</Button>
            <Button onClick={() => store.dispatch(minusAction(1))}>-1</Button>
            <Button onClick={() => store.dispatch(addAction(10))}>+10</Button>
            <Button onClick={() => store.dispatch(minusAction(10))}>-10</Button>
            <Divider />
            <Button onClick={() => store.dispatch(multiplyAction(5))}>*5</Button>
            <Button onClick={() => store.dispatch(divideAction(5))}>/5</Button>
            <Button onClick={() => store.dispatch(multiplyAction(10))}>*10</Button>
            <Button onClick={() => store.dispatch(divideAction(10))}>/10</Button>
        </div>
    )
}

export default CombineReducer

