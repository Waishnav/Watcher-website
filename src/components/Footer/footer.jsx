import React from "react";
import main_img from '../.././assets/logo.svg';
import up_arrow from '../.././assets/up-arrow.svg';
import git_img from '../.././assets/github.svg';
import './Footer.css';
//Footer component

function Footer() {
    return (


        <footer class="site-footer">
            <div class="footer-container">
                <div class="row">

                    <div class="col-md-8 ">
                        <h6>SPREAD<br /> THE WORD</h6>
                        <ul className="footer-links">
                            <li><a>twitter</a></li>
                            <li><a>Discord</a></li>
                            <li><a>LinkedIn</a></li>
                            <li><a>Reddit</a></li>
                            <li><a>Instagram</a></li>
                        </ul>
                    </div>




                    <div class="col-md-3" id="rightFoot">
                        <img class="Watcher-Logo-Footer" src={main_img} alt="Watcher-Logo" />
                        <p>
                            Watcher
                        </p>
                        <ul class="footer-links">

                            <li><a target="_blank" href="https://github.com/Waishnav/Watcher-website">GitHub <img class="arrowIcon" src={up_arrow} alt="github" /></a></li>

                        </ul>

                    </div>

                </div>
                <hr />
            </div>
            <div class="footer-container">
                <div class="row">
                    <div class="col-lg-10 ">
                        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by

                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">

                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;