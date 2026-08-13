
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MainNav = () => {
  return (
    <span><Link to="/login">Log In</Link><Button variant={'ghost'}>Log In</Button></span>
  )
}

export default MainNav;