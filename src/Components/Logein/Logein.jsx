import './Logein.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import Focal from './../../assets/Images/focal.png'
import showPass from './../../assets/Images/showPass.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


export default function Logein() {

    const { handleSubmit, errors } = useForm()

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data.password);
    };


    return (
        <section className='LogeIn'>
            <img className='Logo' src={Focal} alt="Focal photo" />
            <div className='Main-box'>
                <h2>أهلاً بك في مستقبلك</h2>
                <h4>... تعلّم... واستمتع</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="Email" name="email" placeholder='أدخل البريد الإلكتروني الخاص بك' />
                    <div className='pass-Area'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='كلمة المرور'
                            name="password"
                        />
                        <img
                            onClick={() => setShowPassword(!showPassword)}
                            src={showPass} alt="showPass" />
                    </div>
                    <Link to={'./HomePage'}><button>الدخول</button></Link>
                </form>
            </div>
            <div className='Footer'>
                <VideoFooter />
            </div>
        </section>
    )

}
