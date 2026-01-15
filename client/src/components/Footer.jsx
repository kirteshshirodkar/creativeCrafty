import React from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-top">
                    <p>
                        Top companies choose <a href="#">Your Business Name</a> to build
                        in-demand career skills.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Help and Support</a></li>
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Investors</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Settings</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Connect</h4>
                        <div className="social-media">
                            <a href="#"><img src={facebook} alt="Facebook" /></a>
                            <a href="#"><img src={twitter} alt="Twitter" /></a>
                            <a href="#"><img src={instagram} alt="Instagram" /></a>
                            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Your Business Name. All rights reserved.</p>
                    <div className="language-switcher">
                        <a href="#">English</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
