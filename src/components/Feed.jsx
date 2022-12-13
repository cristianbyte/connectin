import React, { useEffect, useState } from "react"
import ModeIcon from '@mui/icons-material/Mode';
import PhotoIcon from '@mui/icons-material/Photo';
import InputOption from "./InputOption";
import Video from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Post from "./Post";
import './feed.css'
import {db} from '../firebase'
import firebase from 'firebase/compat/app';

export default function Feed(){
      // State para mantener el valor del formulario de entrada
    const [input, setInput] = useState('')
    // State para mantener la lista de publicaciones
    const [posts, setPosts] = useState([])
     // Recupera la lista de publicaciones de la base de datos cuando el componente carga
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(
                (doc) => ({id: doc.id,data: doc.data(),})
            ));
        })
    },[])

    // Agrega una nueva publicación a la base de datos y limpia el campo de entrada
    const sendPost = (e) =>{
        e.preventDefault()
        db.collection('posts').add({
            name: 'Cristian',
            description: 'Frontend Developer',
            message: input,
            photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__postContainer">
                <div className="feed__postInput">
                    <ModeIcon className='icon'/>
                    <form action="">
                        <input value={input} onChange={e=> setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="feed__options">
                    <InputOption Icon={PhotoIcon} title='photo' color='#A6B1E1'/>
                    <InputOption Icon={Video} title='video' color='#FF8787'/>
                    <InputOption Icon={EventIcon} title='event' color='#FFF89A'/>
                    <InputOption Icon={LiveTvIcon} title='Stream' color='#EF4B4B'/>
                </div>
            </div>
            {/* Se ejecuta en un componente de React y se encarga de mostrar una lista de publicaciones en pantalla. 
            La lista de publicaciones se obtiene del estado del componente, y se itera utilizando 
            el método map para crear un componente Post por cada publicación en la lista.*/}
            {posts.map(({id, data:{name, description, message, photoURL}})=>(
                <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
            ))} 
        </div>
    )
}