/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react"
import { EVENTS } from "./const.js"
//import HomePage from "./pages/Home.jsx"
//import AboutPage from "./pages/About.jsx"
import { Router } from "./Router.jsx"
import Page404 from "./pages/404.jsx"
import SearchPage from "./pages/Search.jsx"
import { Route } from './Route.jsx'
import { lazy } from "react"

const AboutPage = lazy(() => import('./pages/About.jsx'))
const HomePage = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading . . .</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
