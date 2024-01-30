import './Login.css'

function Login() {
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
                          <input type="email" class="form-control" id="inputEmail" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                          <label for="inputPassword">Password</label>
                          <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-primary">Login</button>
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
