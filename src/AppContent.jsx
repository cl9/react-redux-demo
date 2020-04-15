import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import {
    Layout
} from 'antd'
import {
    Switch,
    Route,
} from 'react-router-dom'
import routes from "./routes";
const { Content } = Layout

function AppContent(props) {
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 480 }}>
                <Switch>
                  {routes.map(({ path, Component }, key) => (
                    <Route exact path={path} key={key} render={Component} />
                  ))}
                </Switch>
            </div>
        </Content>
    )
}

AppContent.propTypes = {

}

export default AppContent

