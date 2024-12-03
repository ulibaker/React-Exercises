/* eslint-disable react/prop-types */
import { EVENTS } from "./const"
import { useEffect, useState, Children } from "react"
import { match } from "path-to-regexp"

export function Router ({ children, routes = [], defaultComponent: DefaultComponent }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])

    let routeParams = {}
  
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'

        if(!isRoute) return null
        return props
    }).filter(Boolean)

    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({ path }) => { 
        if(path === currentPath) return true
        
        const matcherUrl = match (path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)

        if(!matched) return false

        routeParams = matched.params
        return true

    })?.Component

    return Page 
        ? <Page routeParams={routeParams} /> 
        : <DefaultComponent routeParams={routeParams} />
  }