import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from 'react-router-dom'
import {
    List
} from 'antd'

function ListView(props) {
    const _renderItem = (item, index) => (
        <Link to={{
            pathname: item.path,
        }}>
            <List.Item
                key={index}
            >
                {item.title}
            </List.Item>
        </Link>
    )
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={props.list}
            renderItem={_renderItem}
        />
    )
}

ListView.propTypes = {

}

export default ListView

