import './navbar.scss';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
                    <span>Homepage</span>
                    <Link to="/series" className='link'>
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <span>KID</span>
                    <NotificationsIcon className='icon' />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
