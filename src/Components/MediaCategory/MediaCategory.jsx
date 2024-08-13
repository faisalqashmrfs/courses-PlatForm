import React, { useEffect, useState } from 'react';
import './MediaCategory.css';
import markiting from './../../assets/Images/markiting.png';
import axios from 'axios';
import x from './../../assets/Images/x.png'
import insta from './../../assets/Images/insta.png'
import linkedin from './../../assets/Images/linkedin.png'
import behance from './../../assets/Images/behance.png'
import facebook from './../../assets/Images/facebook.png'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

export default function MediaCategory({ media }) {

    const token = localStorage.getItem('token');

    const [datav, setDatav] = useState([]);
    const [datas, setDatas] = useState([]);
    const [data10, setData10] = useState(null);
    const [videoData, setVideoData] = useState(null); // State for video data

    const specialV = localStorage.getItem('data');

    useEffect(() => {
        axios.get(`https://platform.focal-x.com/api/version`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                setDatav(response.data.data);
                
                
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [token]);

    const [medias , setmedias] = useState('')

    useEffect(() => {
        axios.get(`https://platform.focal-x.com/api/specializations`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                setDatas(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [token]);

    function HandelIDspshialzitio (LogeID)
    {
        localStorage.setItem('LogeID' , LogeID)
    }

    useEffect(() => {
        if (datav.length > 0 && datas.length > 0 && specialV) {
            const myParsedObject = JSON.parse(specialV);
            const combinedData = myParsedObject.map((item) => {
                const specialization = datas.find(s => s.id === item.specialization_id);
                const version = datav.find(v => v.id === item.version_id);
                return {
                    specializationId: item.specialization_id,
                    versionId: item.version_id,
                    specializationName: specialization ? specialization.name : 'غير موجود',
                    versionName: version ? version.name : 'غير موجود'
                };
            });
            setData10(combinedData);

            // Fetch video data for the first item in combinedData
            if (combinedData.length > 0) {
                const firstItem = combinedData[0];
                fetchVideoData(firstItem.versionId, firstItem.specializationId);
                HandelIDspshialzitio(firstItem.specializationId);
                setHandelColor(0);  // Set the first item as selected
            }
        }
    }, [datav, datas, specialV]);

    // Function to fetch video data based on selected version and specialization IDs
    const fetchVideoData = (versionId, specializationId) => {
        axios.get(`https://platform.focal-x.com/api/video?version=${versionId}&specialization=${specializationId}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                setVideoData(response.data.data); // Store the fetched video data
                setmedias(datas.find(s => s.id == specializationId));
            })
            .catch(error => {
                console.error('Error fetching video data: ', error);
            });
    };

    const [Ximages, setXimages] = useState(markiting);
    const [Xtitle, setXtitle] = useState('Digital');
    const [Xtitle1, setXtitle1] = useState('Marketing');
    const [index, setindex] = useState(0);
    const [indexClass, setindexClass] = useState('indexClass0');
    const [backColor, setbackColor] = useState('markiting');

    function handelChangeCategory() {
        // Function logic here
    }

    const [HandelColor,setHandelColor] = useState()

   function HandelColor12 (index)
   {
    setHandelColor(index)
   }

    return (
        <>
            <section className='Hero-section'>
                <div className='TopBar'>
                    {media && medias && <div className='media-Section'>
                        <div>
                            <h2>{medias.name}</h2>
                        </div>
                        <div className='Img-area'>
                            <div className={backColor}>
                                <img className='MainPhots' src={medias.image} alt="" />
                                
                            </div>
                        </div>
                    </div>}
                    {media && !medias && <div className='media-Section'>
                        <div>
                            <h2>Chose S</h2>
                        </div>
                        <div className='Img-area'>
                            <div className={backColor}>
                            <img className='MainPhots' src="" alt="" />
                            </div>
                        </div>
                    </div>}
                    <nav className='SV-lista'>
                        <div className='navigationstatic'>
                            <ul className='indexClass'>
                                {data10 ? data10.map((data, index) => (
                                    <li key={index}
                                        className={HandelColor == index ?'ChosingCategory':''}
                                        onClick={() => (fetchVideoData(data.versionId, data.specializationId),HandelIDspshialzitio(data.specializationId),HandelColor12(index))} // Call fetch function on click
                                    >
                                        <span>
                                            {data.specializationName} {data.versionName}
                                        </span>
                                    </li>
                                )) : null}
                            </ul>
                        </div>
                    </nav>
                </div>
                
            </section>
            {videoData && (
                <section className='Video-Section'>
                    {videoData.map((e) => (
                        <div className='Card' key={e.id}>
                            <div className='iframe'>
                            <ReactPlayer  url={e.path} />
                            </div>
                            <div className='BodyCard'>
                                <p className='parag'>{e.title}</p>
                                <div className='data'>
                                    <p>{e.date}</p>
                                    <p>الجلسة {e.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}
            {/* {videoData && (
                <section className='Video-Section'>
                    {videoData.map((e) => (
                        <div className='Card' key={e.id}>
                            <iframe width="560" height="315" src={e.path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='BodyCard'>
                                <p className='parag'>{e.title}</p>
                                <div className='data'>
                                    <p>{e.date}</p>
                                    <p>الجلسة {e.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )} */}
            <footer className='Video-Footer'>
                    <div className='contant'>
                        <p>
                            2021 - 2024 focal X agency All Right Reserved
                        </p>
                        <div className='IconsFather'>
                            <div>
                                <Link target='blank' to={'https://twitter.com/focal_x_agency'} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <img src={x} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link target='blank'  to={'https://www.instagram.com/focal.x.agency'} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <img src={insta} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link target='blank' to={'https://www.linkedin.com/company/focal-x-agency/'} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <img src={linkedin} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link target='blank'  to={'https://www.behance.net/focal-x-agency'} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <img src={behance} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link target='blank'  to={'https://www.facebook.com/focal.x.agency/'} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <img src={facebook} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    );
}
