export const getRandomImages = async (keyWords) => {
  const res = await fetch(`https://cataas.com/cat/says/${keyWords}?size=50&color=red&json=true`)
  const data = await res.json()
  const { _id } = data
  // console.log(response)
  return _id
}
