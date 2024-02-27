import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const loginApiEndpoint = "http://localhost:8000/api/auth/login";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isToken, setIsToken] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    if (!email) {
      setLoginError('Please provide both email and password.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setLoginError('Invalid email format. Please provide a valid email address.');
      return;
    }
    if (!password) {
      setLoginError('Please provide both email and password.');
      return;
    }
    try {
      const response = await axios.post(loginApiEndpoint, {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const token = response.data.access_token;
      localStorage.setItem('token', token);
      console.log('login is good');
      setIsToken(true);
      setLoginError('');
    } catch (error) {
      console.log('Login failed', error);
      setLoginError('Login failed. Please check your credentials and try again.');
      return
    }
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      loginModal.classList.remove('show');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }
  };

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = () => {
    if (!registerName || !registerEmail || !registerPassword || !confirmPassword) {
      setRegisterError('Please fill in all fields.');
      return;
    }
    if (registerPassword !== confirmPassword) {
      setRegisterError('Passwords do not match.');
      return;
    }
    // Your register logic here
    console.log('Registration successful!');
    setLoginError('');
  };

  if (isToken) {
    return <Navigate to="/push-user" replace />;
  }

  return (
    <>
      <div className="container-flex" id="login-wrapper">
        <div className="row h-100">
          <div className="col-md-6 text-white" id="login-column2">
            <div>
              <div className="h1 login-h1">FIND IT FAST</div>
              <div className="h6 login-h6 mt-5">Find Your Electronic Stuffs Here!</div>
            </div>
          </div>
          <div className="col-md-6" id="login-column1">
            <div className="p-5 rounded text-white" id="login-box">
              <div className="h1 login-h1 pb-3">Get Started</div>
              <div class="d-flex flex-column align-items-center">
                <button type="button" class="btn login-btn p-3 mt-5 d-block h3 login-h3 rounded text-white w-75" data-toggle="modal" data-target="#registerModal">Register</button>
                <button type="button" class="btn login-btn p-3 mt-5 d-block h3 login-h3 rounded text-white w-75" data-toggle="modal" data-target="#loginModal">Login</button>
              </div>

              {/* Register Modal */}
              <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content custom-modal">
                    <div className="modal-header">
                      <h5 className="modal-title text" id="registerModalLabel">Register</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="registerName">Name</label>
                          <input type="text" className="form-control" id="registerName" placeholder="Enter name" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="registerEmail">Email address</label>
                          <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="registerPassword">Password</label>
                          <input type="password" className="form-control" id="registerPassword" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                      </form>
                      {registerError && <p className="text-danger">{registerError}</p>}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn login-btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn login-btn btn-success" onClick={handleRegister}>Register</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Login Modal */}
              <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content custom-modal">
                    <div className="modal-header">
                      <h5 className="modal-title" id="loginModalLabel">Login</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="inputEmail">Email address</label>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPassword">Password</label>
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                      </form>
                      {loginError && <p className="text-danger">{loginError}</p>}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn login-btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" onClick={handleLogin} className="btn login-btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
