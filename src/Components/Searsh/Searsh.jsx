import { useState } from 'react'
import './Searsh.css'
import NavBar from '../Nanvbar/NavBar'
import { Link } from 'react-router-dom'
import sershe from './../../assets/Images/sershe.png'
import MediaCategory from '../MediaCategory/MediaCategory'
import VideoFooter from '../VideoFooter/VideoFooter'

export default function Searsh() {

    const [leave, setleave] = useState(false)

    function handelLeaving() {
        setleave(!leave)
        setloding(false)
    }

    return (
        <main>
            <NavBar setleave={setleave} />
            <div className={leave ? 'Leave' : 'Leaveoff'}>
                <h3>هل تريد الخروج؟</h3>
                <div>
                    <Link to={'/'}>
                        <button className='yes'>نعم</button>
                    </Link>
                    <button
                        onClick={() => handelLeaving()}
                        className='no'>لا</button>
                </div>
            </div>
            <div className='sercth'>
            <input type="text" placeholder='... اكتب عنوان أو رقم الجلسة'/>
            <img src={sershe} alt="أيقونة بحث" />
            </div>
            <MediaCategory media={false}/>
            <div className='resolte'>
                <span>
                    : النتائج
                </span>
            </div>
            <VideoFooter />
        </main>
    )
}
