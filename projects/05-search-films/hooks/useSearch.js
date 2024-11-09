import { useState, useEffect, useRef } from 'react'

export function useSearch () {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const isFirstRender = useRef(true)
  
    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = query === ''
        return
      }
      if (query === '') {
        setError('It is not possible to search a movie without a title')
        return
      }
      if (query.match(/^\d+$/)) {
        setError('The title of a movie cannot be only a number')
        return
      }
      if (query.length < 2) {
        setError('The title must contain at least 2 characters')
        return
      }
      setError(null)
    }, [query])
  
    return { query, setQuery, error }
  }