import React from 'react';
import gitImg from '../assets/github.svg'
import telegramImg from '../assets/Telegram_logo.svg'
import gmailImg from '../assets/Gmail_icon.svg'
import likeImg from '../assets/like.png'
import arrowImg from '../assets/arrow-btn.png'

const Footer = () => {
    const [visible, setVisible] = React.useState(false)
    return (
        <div className="footer-wrapper">
            <img src={arrowImg} alt="open site footer" className={visible? 'footer-open-btn footer-open-btn--active' : 'footer-open-btn'} onClick={()=>{setVisible(!visible)}}/>
            <div className="footer-container">
                <div className={visible ? 'footer footer-active' : 'footer'}>
                    <div className="container">
                        <div className="footer--flex">
                            <div className="footer__link">
                                <p>Мои контакты:</p>
                                <div>
                                    <a target="_blank" href="https://github.com/YockyMai">
                                        <img src={gitImg} alt="My git-hub profile"/>
                                    </a>
                                    <a target="_blank" href="https://t.me/YockyMai">
                                        <img src={telegramImg} alt="My git-hub profile"/>
                                    </a>
                                    <a target="_blank" href="mailto:g.valera15102003@gmail.com">
                                        <img src={gmailImg} alt="My git-hub profile"/>
                                    </a>
                                </div>
                            </div>
                            <div className="footer__author">
                                <p>
                                    developed by
                                </p>
                                <h3>
                                    YockyMai
                                </h3>
                            </div>
                            <div className="footer__company-name">
                                <p>Pizza Slice -<br/>то что нужно</p>
                                <img src={likeImg} alt="Like :D"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
