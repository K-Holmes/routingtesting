import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className = "nav">
        <Link to = "/" className ="homepage">SiteName</Link>
        <ul>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to = "/skills">Skills</Link>
            </li>
        </ul>
    </nav>
}