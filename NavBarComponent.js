import {Link, Outlet} from 'react-router-dom'
export default function NavBar(){
    return(
        <div>
        <h1>simple single page</h1>
        <ul>
            <li><Link to="Aboutus">About us</Link></li>
            <li><Link to="Contact">contact</Link></li>
            <li><Link to="Pricing">pricing</Link></li>
        </ul>
        <div>
            <Outlet/>
            content goes here
        </div>
    
    </div>)
}