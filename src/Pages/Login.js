import './Login.css'
import Button from '../Components/Button';

function Login() {
    return (
      <>
        <div class="container-flex" id="wrapper">
          <div class="row h-100">
            <div class="col-6" id="column1">
              <div class="p-5 rounded text-white" id="login-box">
                <div class="h1 pb-3">Get Started</div>
                <div type="button" class="btn p-3 mt-5 d-block h3 rounded text-white">Login</div>
                <div type="button" class="btn p-3 mt-5 d-block h3 rounded text-white">Register</div>
              </div>
            </div>
            <div class="col-6 text-white" id="column2">
              <div>
                <div class="h1">FIND IT FAST</div>
                <div class="h6 mt-5">Find Your Electronic Stuffs Here!</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Login;
  