import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Steps
} from 'antd'
import {
    HighlightCode
} from '../index'
const { Text, Paragraph } = Typography
const { Step } = Steps

function StepList(props) {
    const [current, setCurrent] = useState(0)

    const onChange = value => {
        setCurrent(value);
    };

    const isPic = value => {
        if (!value) {
            return false
        }
        console.log(value)

        if (value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg') || value.endsWith('.gif')) {
            return true
        }
        return false
    }

    const formatContent = content => {
        if (!content) {
            return <div></div>
        }

        if (typeof(content) === 'object' && content.hasOwnProperty('code')) {
            return <HighlightCode language={content.language || 'javascript'}>
                {content.code}
            </HighlightCode>
        } 

        if (isPic(content)) {
            return <img src={props.contentList[current]} />
        } else {
            return <Paragraph code copyable>{content}</Paragraph>
        }
    }

    return (
        <div>
            <Steps current={current} onChange={onChange} direction="vertical" size="small">
                {props.stepList.map((item, index) => {
                    return <Step key={index} title={item.title || `Step${index + 1}`} subTitle={item.subTitle || ''} description={item.title ? item.description : item} />
                })}
            </Steps>
            {formatContent(props.contentList[current])}
        </div>
    )
}

StepList.propTypes = {
    stepList: PropTypes.array.isRequired,
    contentList: PropTypes.array.isRequired
}

export default StepList

