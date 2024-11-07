import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFacts } from './services/facts'
import { getRandomImages } from './services/images'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${keyWords}?size=50&color=red&json=true`
const CAT_IMAGE_PREFIX = 'https://cataas.com/cat/'

// CUSTOM HOOK **************
function useCatImage ({ fact }) {
  const [imageID, setImageID] = useState()
  useEffect(() => {
    if (!fact) return
    const factSplitted = fact.split(' ')
    const keyWords = factSplitted[1] + ' ' + factSplitted[2] + ' ' + factSplitted[3] + ' ' + factSplitted[4] + ' ' + factSplitted[5]
    // console.log(keyWords)
    getRandomImages(keyWords).then(newID => setImageID(newID))
    // console.log(imageID)
  }, [fact])

  return { imageID }
}
// END OF THE CUSTOM HOOK

export function App () {
  const [fact, setFact] = useState()
  const { imageID } = useCatImage({ fact })

  useEffect(() => {
    getRandomFacts().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFacts()
    setFact(newFact)
  }

  return (
    <div className='cats-app-main-column'>
      <h1>Cats are awesome!</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageID && <img src={`${CAT_IMAGE_PREFIX}${imageID}`} alt='Image extracted from catfact.ninja random fact keywords' />}
    </div>
  )
}
