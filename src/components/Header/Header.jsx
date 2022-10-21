import React, { useEffect, useState } from "react";
import up_arrow from '../.././assets/up-arrow.svg';
import git_img from '../.././assets/github.svg';
import './Header.css';
import Eye from "../Eye/Eye";

function Header() {
    const [stars, setStars] = useState(100);
    useEffect(() => {
        async function getStars() {
            const res = await fetch("https://api.github.com/repos/waishnav/watcher");
            const jsonRes = await res.json();
            setStars(jsonRes.stargazers_count);
        }
        getStars();
    }, [stars]);

    return (
        <div className="Container">
            <div className="Container_1">
                <Eye className="logo" />
                <p>
                    Watcher
                    <img src={up_arrow} alt="" />
                </p>
            </div>

            <a href="https://github.com/Waishnav/Watcher">
                <div className="Container_2">
                    <img src={git_img} alt="" />
                    <div className="StarUs">STAR US</div>
                    <div className="vertical"></div>
                    <div className="Likes">{stars}</div>
                </div>
            </a>
        </div >
    );
}

export default Header;