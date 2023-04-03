const Form = () => {
  return (
    <div className="form-container">
        <div className="form-div">
            <h3>Get In Touch With Us To Connect</h3>
            <h4>Contact Us</h4>
            <div className="form">
                <div className="input">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="lorem@gmail.com" />
                </div>
                <div className="input">
                    <input type="tel" placeholder="+91 1234"/>
                    <select>
                        <option>India</option>
                        <option>USA</option>
                        <option>Nepal</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <div className="input">
                    <select>
                        <option>I have booked but registration not done</option>
                        <option>USA</option>
                        <option>Nepal</option>
                        <option>China</option>
                        <option>Japan</option>
                    </select>
                </div>
                <button className="submit-btn">Submit</button>
            </div>
        </div>
        <div className="form-img">
            <img src="./form.png" />
        </div>
    </div>
  )
}

export default Form;