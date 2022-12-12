import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import './post.css'
import HeaderOption from "./HeaderOption";
import InputOption from "./InputOption";

export default function Post({name, description, message, photoURL }){
    return (
        <div className="post">
            <div className="post__header">
                <HeaderOption  clase='post__image' avatar={'https://i.pravatar.cc/300'}/>
                <div className="post__info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">{message}</div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title='Like' />
                <InputOption Icon={CommentIcon} title='Comment' />
                <InputOption Icon={ShareIcon} title='Share' />
                <InputOption Icon={BookmarkBorderIcon} title='Save' />
            </div>
        </div>
    )
}