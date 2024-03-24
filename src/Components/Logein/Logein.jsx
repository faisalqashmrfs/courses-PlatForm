import './Logein.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import Focal from './../../assets/Images/focal.png'
import { Link } from 'react-router-dom'

export default function Logein() {

    return (
        <section className='LogeIn'>
            <img className='Logo' src={Focal} alt="Focal photo" />
            <div className='Main-box'>
                <h2>أهلاً بك في مستقبلك</h2>
                <h4>... تعلّم... واستمتع</h4>
                <form action="">
                    <input type="email" placeholder='أدخل البريد الإلكتروني الخاص بك'/>
                    <input type='password' placeholder='كلمة المرور'/>
                    <Link to={'./HomePage'}><button>الدخول</button></Link>
                </form>
            </div>
            <div className='Footer'>
                <VideoFooter />
            </div>
        </section>
    )
    
}
