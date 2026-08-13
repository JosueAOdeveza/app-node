import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';


const Header = () => {
    return (
        <div>
            <div>
                <Link to="/">Logo</Link>
                <div><MobileNav /></div>
                <div><MainNav /></div>
            </div>
            <div>
            </div>
        </div>

    )
}  

export default Header;