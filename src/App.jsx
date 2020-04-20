import React from 'react'
import { AppBreadCrumbs } from 'cl9-docs-component'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import sideRoutes from './sideRoutes'
import './App.css'

function App() {
  return (
    <Router>
      <AppBreadCrumbs
        routes={routes}
        sideRoutes={sideRoutes}
        footContent="Redux Demo ©2020 Created by cl9"
      />
    </Router>
  )
}

export default App
