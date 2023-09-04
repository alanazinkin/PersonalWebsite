import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import logo from '../assets/alanazinkinlogo.png';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

  return (
    <div className = 'navbar'>
        
        <div className = 'leftSide' id={openLinks ? "open" : "close" }>
            <img src={logo} alt='unavailable'/>
            <div className = 'hiddenLinks'>
                <li><Link to='/PersonalWebsite'> Home </Link></li>
                <li><Link to='/about'> About Alana </Link></li>
                <li><Link to='/projects'> Projects </Link></li>
                <li><Link to='/experiences'> Experiences </Link></li>
                <li><Link to='/FINALresume.pdf'> Resume </Link></li>
            </div>
            
        </div>
        <div className = 'rightSide'>
            <Link to='/PersonalWebsite'> Home </Link>
            <Link to='/about'> About Alana </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experiences'> Experiences </Link>
            <Link to='/FINALresume.pdf'> Resume </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar