import React, { useState } from 'react'
import left from './../../assets/Images/left-arwo.png';
import right from './../../assets/Images/right-arwo.png';
import './MediaCategory.css'
import markiting from './../../assets/Images/markiting.png';
import Ui from './../../assets/Images/Ui.png';
import desing from './../../assets/Images/desing.png';
import front from './../../assets/Images/front.png';
import backkk from './../../assets/Images/backkk.png';
import flutter from './../../assets/Images/flutter.png';

export default function MediaCategory({ media }) {

    const [Ximages, setXimages] = useState(markiting);
    const [Xtitle, setXtitle] = useState('Digital');
    const [Xtitle1, setXtitle1] = useState('Marketing');
    const [index, setindex] = useState(0);
    const [indexClass, setindexClass] = useState('indexClass0');
    const [backColor, setbackColor] = useState('markiting');

    function handelChangeCategory(index) {
        setindex(index)
        if (index === 0) {
            setXtitle('Digital')
            setXtitle1('Marketing')
            setbackColor('markiting')
            setXimages(markiting)
        }
        else if (index === 1) {
            setXtitle('UI&UX')
            setXtitle1('Design')
            setbackColor('ui')
            setXimages(Ui)
        }
        else if (index === 2) {
            setXtitle('Graphic')
            setXtitle1('Design')
            setbackColor('design')
            setXimages(desing)
        }
        else if (index === 3) {
            setXtitle('Front-end')
            setXtitle1('Developer')
            setbackColor('ui')
            setXimages(front)
        }
        else if (index === 4) {
            setXtitle('Back-end')
            setXtitle1('Developer')
            setbackColor('ui')
            setXimages(backkk)
        }
        else if (index === 5) {
            setXtitle('Flutter')
            setXtitle1('Developer')
            setbackColor('ui')
            setXimages(flutter)
        }
    }

    return (
        <section className='Hero-section'>
            <div className='TopBar'>
                {media && <div className='media-Section'>
                    <div>
                        <h2>{Xtitle}</h2>
                        <span>{Xtitle1}</span>
                    </div>
                    <div className='Img-area'>
                        <div className={backColor}>
                            <img src={Ximages} alt="" />
                        </div>
                    </div>
                </div>}
                <nav className=''>
                    <div
                        className={index === 0 ? "FQ-disapleButton" : ""}
                        onClick={() => handelChangeCategory(index - 1)}
                    ><img src={left} alt="left-arwo" className='left-arwo' /></div>
                    <div className='navigation'>
                        <ul className={`indexClass${index}`}>
                            <li
                                onClick={() => handelChangeCategory(0)}
                                className={index === 0 ? "ChosingCategory" : ""}><span>التسويق والإدارة التسويقية دفعة 5</span></li>
                            <li
                                onClick={() => handelChangeCategory(1)}
                                className={index === 1 ? "ChosingCategory" : ""}><span>تصميم واجهات وتجربة المستخدم دفعة 6</span></li>
                            <li
                                onClick={() => handelChangeCategory(2)}
                                className={index === 2 ? "ChosingCategory" : ""}><span>التصميم الغرافيكي دفعة 6</span></li>
                            <li
                                onClick={() => handelChangeCategory(3)}
                                className={index === 3 ? "ChosingCategory" : ""}><span>دفعة 6 Front-end</span></li>
                            <li
                                onClick={() => handelChangeCategory(4)}
                                className={index === 4 ? "ChosingCategory" : ""}><span>Back-end دفعة 5</span></li>
                            <li
                                onClick={() => handelChangeCategory(5)}
                                className={index === 5 ? "ChosingCategory" : ""}><span>تطوير التطبيقات Flutter دفعة 6</span></li>
                        </ul>
                    </div>
                    <div
                        onClick={() => handelChangeCategory(index + 1)}
                        className={index === 5 ? "FQ-disapleButton" : ""}
                    ><img src={right} alt="right-arwo" className='right-arwo' /></div>
                </nav>
            </div>
        </section>
    )
}
