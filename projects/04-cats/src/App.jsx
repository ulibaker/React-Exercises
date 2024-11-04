import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_IMAGE_PREFIX = 'https://cataas.com/cat/'

export function App () {
  const [fact, setFact] = useState()
  const [imageID, setImageID] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const factSplitted = fact.split(' ')
    const keyWords = factSplitted[1] + ' ' + factSplitted[2] + ' ' + factSplitted[3] + ' ' + factSplitted[4] + ' ' + factSplitted[5]
    console.log(keyWords)

    fetch(`https://cataas.com/cat/says/${keyWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        // console.log(response)
        setImageID(_id)
      })
  }, [fact])

  return (
    <div className='cats-app-main-column'>
      <h1>Cats are awesome!</h1>
      {fact && <p>{fact}</p>}
      {imageID && <img src={`${CAT_IMAGE_PREFIX}${imageID}`} alt='Image extracted from catfact.ninja random fact keywords' />}
    </div>
  )
}
