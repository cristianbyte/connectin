import React from 'react';
import './header.css'

export default function HeaderOption({avatar, Icon, title, clase}){
    return (
        <div className="header__option">
            {Icon && <Icon className='header__option--icon' />}
            {avatar && <img className={'header__option--profile'.concat(' ',clase)} src={avatar} alt='' />}
            <h3 className="header__option--title" >{title}</h3>
        </div>
    )
}