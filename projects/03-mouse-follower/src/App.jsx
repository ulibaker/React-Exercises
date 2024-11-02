import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    //console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      //console.log('handleMove', { clientX, clientY })  
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('turned off')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0)',
        border: '1px dotted rgba(0,255,237,1)',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -52,
        top: -52,
        width: 102,
        height: 102,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <div style={{
        position: 'absolute',
        background: 'radial-gradient(circle, rgba(255,255,255,0.75) 50%, rgba(0,255,237,0.75) 75%, rgba(0,0,0,0.75) 100%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -50,
        top: -50,
        width: 100,
        height: 100,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
        { enabled ? 'Turn off' : 'Turn on'}
      </button>
    </>
  )
}

function App() {
const [mounted, setMounted] = useState(true)

  return (
    <>
      <h1>Projecto 3: Spirit Bomb</h1>
      { mounted ? <FollowMouse/> : 
      <button>
        Unavailable
      </button> }
      <button onClick={() => setMounted(!mounted)}>
        { mounted ? 'Disappear' : 'Appear' }
      </button>
    </>
  )
}

export default App
