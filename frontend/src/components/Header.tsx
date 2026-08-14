import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';


const Header = () => {
    return (
        <div className='border-b-2 border-b-sky500 py-6'>
            <div className='container mx-auto flex justify-between items-center' >
                <Link to="/" className='text-3x1 front-bold tracking-tight text-sky-400'>Logo</Link>
                <div><MobileNav /></div>
                <div><MainNav /></div>
            </div>
            <div>
            </div>
        </div>

    )
}  

export default Header;