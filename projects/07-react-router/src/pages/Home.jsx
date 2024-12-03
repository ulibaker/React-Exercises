import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
        <h1>Home</h1>
        <p>This is an example page</p>
        <Link to='/about'>About us</Link>
      </>
    )
  }