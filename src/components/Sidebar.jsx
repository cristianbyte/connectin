import React from "react"
import HeaderOption from './HeaderOption'
import './sidebar.css'

export default function Sidebar(){
    const recentItem = (topic) =>{
        return (
            <div className="sidebar__recentItem">
                <p>{topic}</p>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar__up">
                <img className="sidebar__up--img" src="https://source.unsplash.com/400x150" alt="" />
                <HeaderOption clase='sidebar__up--avartar' avatar={'https://i.pravatar.cc/300'}/>
                <h2>Matsia Kurma</h2>
                <h4 >Lorem CEO of ipsum dolor React</h4>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber">2340</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">3042</p>
                    </div>
                </div>
            </div>



            <div className="sidebar__down">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programing')}
                {recentItem('sofwareengineering')}
                {recentItem('developer')}
                {recentItem('desing')}
            </div>
        </div>
    )
}