import React, { useEffect, useState } from 'react';
import main_img from '../.././assets/logo.svg';
import up_arrow from '../.././assets/up-arrow.svg';
import git_img from '../.././assets/github.svg';
import './Header.css';

function Header() {
    const [stars, setStars] = useState(100);
    useEffect(() => {
        async function getStars() {
            const res = await fetch('https://api.github.com/repos/waishnav/watcher');
            const jsonRes = await res.json();
            setStars(jsonRes.stargazers_count);
        }
        getStars();
    }, [stars]);

    return (
        <div className='Container'>
            <a
                href='https://github.com/Waishnav/Watcher'
                title='Watcher'
                id='watcher'
                rel='noopener'
                className='Container_1'>
                <div className='Container_1'>
                    <img src={main_img} alt='Watcher-Logo' />
                    <p>
                        Watcher
                        <span className='borderBottom'></span>
                        <img src={up_arrow} alt='' />
                    </p>
                </div>
            </a>

            <a
                href='https://github.com/Waishnav/Watcher'
                title='Github Star Watcher'
                id='#starus'
                class='github_star'
                rel='noopener'>
                <div className='Container_2'>
                    <img src={git_img} alt='' />
                    <div className='StarUs'>STAR US</div>
                    <div className='vertical'></div>
                    <div className='Likes'>{stars}</div>
                </div>
            </a>
        </div>
    );
}

export default Header;
