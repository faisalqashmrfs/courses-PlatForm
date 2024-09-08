import './Logein.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import Focal from './../../assets/Images/focal.png'
import showPass from './../../assets/Images/showPass.png'
import { json, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

export default function Logein() {

    const { handleSubmit, errors } = useForm()

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data.password);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('https://platform.focal-x.com/api/login',
            { email, password },
            {
              headers: {
                'Content-Type': 'application/json',
              }
            }
          );
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('name', response.data.data.name);
          localStorage.setItem('data', JSON.stringify(response.data.data.relation));
        //   localStorage.setItem('relation', response.data.relation);
          if (response.status === 200) {
            // console.log(response.data);
            
            navigate('/HomePage');
          } else {
            setError('');
            navigate('/');
          }
        } catch (error) {
          console.error('حدث خطأ غير متوقع:', error);
          setError('The email or password you entered is incorrect. Please try again');
        }
      };


    return (
        <section className='LogeIn'>
            <img className='Logo' src={Focal} alt="Focal photo" />
            <img className='Logo2' src={Focal} alt="Focal photo" />
            <div className='Main-box'>
            <h2>Welcome To Your Future </h2>
            <h4>learn.. and have fun</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="Email" name="email" placeholder='Enter your E-mail' onChange={(e) => setEmail(e.target.value)}/>
                    <div className='pass-Area'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            name="password"
                            
                        />
                        <img
                            onClick={() => setShowPassword(!showPassword)}
                            src={showPass} alt="showPass" />
                    </div>
                    <Link onClick={handleLogin}><button>Login</button></Link>
                </form>
            </div>
            <div className={error ? 'error-messam':'error-messam-off'}>{error}</div>
            <div className='Footer'>
                <VideoFooter />
            </div>
        </section>
    )

}
