import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const loginApiEndpoint = "http://localhost:8000/api/auth/login";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isToken, setIsToken] = useState(false);

  const handleLogin = async () => { // Make handleLogin async
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
      setIsToken(true)
    } catch (error) {
      console.error('Login failed', error);
      // Handle login errors here, e.g., display an error message
    }
  };
  if (isToken){
    return <Navigate to="/admin" replace />;
  }

    // const loginModal = document.getElementById('loginModal');
    // if (loginModal) {
    //   loginModal.classList.remove('show');
    //   const backdrop = document.querySelector('.modal-backdrop');
    //   if (backdrop) {
    //     backdrop.parentNode.removeChild(backdrop);
    //   }
    // }

  return (
    <>
      <div class="container-flex" id="wrapper">
        <div class="row h-100">
          <div class="col-md-6 text-white" id="column2">
            <div>
              <div class="h1">FIND IT FAST</div>
              <div class="h6 mt-5">Find Your Electronic Stuffs Here!</div>
            </div>
          </div>
          <div class="col-md-6" id="column1">
            <div class="p-5 rounded text-white" id="login-box">
              <div class="h1 pb-3">Get Started</div>
              <div type="button" data-toggle="modal" data-target="#registerModal" class="btn p-3 mt-5 d-block h3 rounded text-white">Register</div>
              <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="registerModalLabel">Register</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="registerName">Name</label>
                          <input type="text" class="form-control" id="registerName" placeholder="Enter name"></input>
                        </div>
                        <div class="form-group">
                          <label for="registerEmail">Email address</label>
                          <input type="email" class="form-control" id="registerEmail" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                          <label for="registerPassword">Password</label>
                          <input type="password" class="form-control" id="registerPassword" placeholder="Password"></input>
                        </div>
                        <div class="form-group">
                          <label for="confirmPassword">Confirm Password</label>
                          <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password"></input>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-success">Register</button>
                    </div>
                  </div>
                </div>
              </div>
              <div type="button" data-toggle="modal" data-target="#loginModal" class="btn p-3 mt-5 d-block h3 rounded text-white">Login</div>
              <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="loginModalLabel">Login</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="inputEmail">Email address</label>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="inputEmail" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                          <label for="inputPassword">Password</label>
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="inputPassword" placeholder="Password"></input>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" onClick={handleLogin} class="btn btn-primary">Login</button>
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
