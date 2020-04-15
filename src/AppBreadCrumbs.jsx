import React from 'react'
import './App.css';
import {
    Layout,
    Breadcrumb,
    Menu
} from 'antd'
import AppContent from './AppContent'
import AppSider from './AppSider'
import './App.css'
import {
    Link,
    withRouter
} from 'react-router-dom'
import routes from './routes'
const { Header, Footer, Content } = Layout

const AppBreadCrumbs = withRouter(props => {
    const { location } = props;
    const crumbs = routes
        // Get all routes that contain the current one.
        .filter(({ path }) => location.pathname.includes(path))
        // Swap out any dynamic routes with their param values.
        // E.g. "/pizza/:pizzaId" will become "/pizza/1"
        .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                    (path, param) => path.replace(
                        `:${param}`, props.match.params[param]
                    ), path
                )
                : path,
            ...rest
        }));
    const extraBreadcrumbItems = crumbs.map((item, index) => {
        return (
            <Breadcrumb.Item key={item.path}>
                {index === crumbs.length - 1 ? <span>{item.name}</span> : <Link to={item.path}>{item.name}</Link>}
            </Breadcrumb.Item>
        );
    });
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb separator=">" className="crumb">
                    {extraBreadcrumbItems}
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <AppSider />
                    <AppContent style={{ padding: '0 24px', minHeight: 280 }} />
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Redux Demo ©2020 Created by cl9</Footer>
        </Layout>
    );
});

export default AppBreadCrumbs

