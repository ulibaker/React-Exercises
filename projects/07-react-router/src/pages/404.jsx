import { Link } from "../Link";

export default function Page404 () {
    return (
        <>
            <h3>Error 404. Page is not found.</h3>
            <img src='./src/pages/error.webp' alt='Critical error, please do panic.' />
            <p>Caution! If you can read this, you are in danger! <Link to='/'>Get out of here ASAP!</Link></p>
        </>
    )
}