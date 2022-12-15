import React from 'react';
import './header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import logo from '../assets/in.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__left'> 
                <h2 className='header__mark' >Connect</h2>
                <img className='header__img' src={logo} alt='logo connectin'/>
                <div className="header__search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon className='icon' />
                </div>
            </div>
            
            <div className='header__right'> 
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={GroupIcon} title='Network'/>
                <HeaderOption Icon={WorkIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={'https://i.pravatar.cc/300'}/>
           </div>
        </div>
    );
}
