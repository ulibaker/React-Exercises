/* eslint-disable react/prop-types */
import { useEffect } from "react"

export default function SearchPage({ routeParams }) {
    useEffect(() => {
        document.title = `${routeParams.query}`
    }, [])
    return (
        <h1>QUERY: {routeParams.query}</h1>
    )
}