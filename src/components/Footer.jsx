const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-1">
            <div className="logo-div">
                <img src="./logo.png" />
            </div>
            <div className="list-div">
                <h3>
                    Company
                </h3>
                <ul>
                    <li>Home</li>
                    <li>Our Offerings</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="list-div">
                <h3>
                    Useful Links
                </h3>
                <ul>
                    <li>Blogs</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="list-div">
                <div className="contact">
                    <div className="contact-container">
                        <i class="fa-regular fa-envelope"></i>
                        <div className="min-contact">
                            <h3>Email:</h3>
                            <h4>support@globalxyz.org</h4>
                        </div>
                    </div>
                    <div className="contact-container">
                        <i class="fa-solid fa-phone"></i>
                        <div className="min-contact">
                            <h3>Phone:</h3>
                            <h4>+91 | 12300000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-2">
            <div className="b-left">
                <p>© Copyright 2023 Designed by ABC Global</p>
            </div>
            <div className="b-right">
                <div className="social">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <p>LinkedIn</p>
                </div>
                <div className="social">
                    <i class="fa-brands fa-facebook"></i>
                    <p>Facebook</p>
                </div>
                <div className="social">
                    <i class="fa-brands fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div className="social">
                    <i class="fa-brands fa-twitter"></i>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;