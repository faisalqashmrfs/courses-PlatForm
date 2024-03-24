import './HomePage.css'
import Videos from '../Videos/Videos';
import VideoFooter from '../VideoFooter/VideoFooter';
import NavBar from '../Nanvbar/NavBar';
import MediaCategory from '../MediaCategory/MediaCategory';
import { HashLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const [loding, setloding] = useState(false)
  const [leave, setleave] = useState(false)

  useEffect(() => {
    setloding(true)
    setTimeout(() => {
      setloding(false)
    }, 5000);
  }, [])

  function handelLeaving() {
    setleave(!leave)
    setloding(false)
  }

  return (
    <>
      <div className={loding ? "loader-spinner" : "loader-spinnerOf"}>
        <HashLoader color="#ef8507" />
      </div>
      <main className={loding ? "ForBlur" : ""}>
        <NavBar setleave={setleave} />
        <MediaCategory media={true}/>
        <Videos />
        <VideoFooter />
      </main>
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

    </>
  )
}
