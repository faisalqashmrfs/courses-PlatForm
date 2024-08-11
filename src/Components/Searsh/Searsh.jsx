import { useState } from 'react'
import './Searsh.css'
// import NavBar from '../Nanvbar/NavBar'
import FocalX from './../../assets/Images/FocalX.png'
import Secrsh from './../../assets/Images/secrtch.png'
import Leave from './../../assets/Images/Leave.png'
import { Link } from 'react-router-dom'
// import MediaCategory from '../MediaCategory/MediaCategory'
import VideoFooter from '../VideoFooter/VideoFooter'
import MediaCategoryForS from '../MediaCategoryForS/MediaCategoryForS'

export default function Searsh() {

    const [leave, setleave] = useState(false)

    function handelLeaving() {
        setleave(!leave)
        setloding(false)
    }

    return (
        <main>
            <nav className="The-Navbar">
        <div className='side_1'> 
            <Link to={'/HomePage'}>
            <img 
            src={Leave} alt="Leave" />
            </Link>
            <Link to={'/searchPage'}>
            <img className='Secrsh' src={Secrsh} alt="Secrsh" />
            </Link>
        </div>
        <div className='side_2'> 
            <div><h3>{name}</h3></div>
            <Link to={'/HomePage'}>
            <img src={FocalX} alt="FocalX_Icone" />
            </Link>
        </div>
    </nav>
            <MediaCategoryForS media={false} />

            <VideoFooter />
        </main>
    )
}
