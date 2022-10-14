import React from "react";
import main_img from '../.././assets/logo.svg';
import up_arrow from '../.././assets/up-arrow.svg';
import git_img from '../.././assets/Vector.svg';
import './Header.css';

function Header() {
    return (
        <div className="Container">
            <div className="Container_1">
                <img src={main_img} alt="Watcher-Logo" />
                <p>
                    Watcher
                    <span className="borderBottom"></span>
                    <img src={up_arrow} alt="" />
                </p>
            </div>

            <button>
                <div className="Container_2">
                    <img src={git_img} alt="" />
                    <div className="StarUs">STAR US</div>
                    <div className="vertical"></div>
                    <div className="Likes">107</div>
                </div>
            </button>
        </div >
    );
}

export default Header;