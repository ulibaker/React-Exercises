import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <p>Hello! My name is Uli</p>
          <img src='./src/uliimage.jpeg' alt='My picture' />
        </div>
        <Link to='/'>Home</Link>
      </>
    )
  }