import React from 'react'
import PropTypes from 'prop-types'
import {
    Layout,
    Menu
} from 'antd'
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
} from '@ant-design/icons';
import {
    Link
} from 'react-router-dom'
import './App.css'
const { Sider } = Layout
const { SubMenu } = Menu;

function AppSider(props) {
    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <LaptopOutlined />
                  redux demo
                </span>
                    }
                >

                    <Menu.Item key="1">
                        <Link to={{
                            pathname: '/module/base',
                        }}>BaseRedux</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={{
                            pathname: '/module/async',
                        }}>AsyncRedux</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

AppSider.propTypes = {

}

export default AppSider

