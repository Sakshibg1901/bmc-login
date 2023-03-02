import "./SignUi.css";
import profile from "./../image/a.jpg";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function SignUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
         
          <div>
            <h1 id="sign-text">Signup</h1>
            <div>
              {/* <img src={email} alt="email" className="email" /> */}
              <input id="e2"
                type="text"
                placeholder="Enter Your Name"
                className="name"/>
            </div>
            <div>
              {/* <img src={email} alt="email" className="email" /> */}
              <input id="e2"
                type="text"
                placeholder="Enter Your Mail"
                className="name"/>
            </div>

            <div>
              {/* <img src={email} alt="email" className="email" /> */}
              <input id="e3"
                type="text"
                placeholder="Enter Your Password"
                className="name"/>
            </div>
            
            <div className="second-input">
              {/* <img src={pass} alt="pass" className="email" /> */}
              <input  id="e4"
                type="password"
                placeholder="Enter confirm Password"
                className="name"  />
               
            </div>
            <div className="login-button">
              <button>Signup</button>
            </div>

            <p className="link" >
              <a href="#">Forgot password ?</a> Or &nbsp;
              <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUi;
