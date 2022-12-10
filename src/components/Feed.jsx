import React from "react"
import ModeIcon from '@mui/icons-material/Mode';
import PhotoIcon from '@mui/icons-material/Photo';
import InputOption from "./InputOption";
import Video from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './feed.css'

export default function Reed(){
    return (
        <div className="feed">
            <div className="feed__postContainer">
                <div className="feed__postInput">
                    <ModeIcon className='icon'/>
                    <form action="">
                        <input type="text" lang="en"/>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="feed__options">
                    <InputOption Icon={PhotoIcon} title='photo' color='#A6B1E1'/>
                    <InputOption Icon={Video} title='video' color='#FF8787'/>
                    <InputOption Icon={EventIcon} title='event' color='#FFF89A'/>
                    <InputOption Icon={LiveTvIcon} title='Stream' color='#EF4B4B'/>
                </div>
            </div>
            
        </div>
    )
}