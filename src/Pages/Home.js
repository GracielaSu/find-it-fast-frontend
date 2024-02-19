import Nav from "../Components/Nav";

function Home() {
  return (
    <div class="backgound">
      <Nav />
      <div class="container-fluid"> 
        <div class="row">
          <div class="col-md-6">
            <div class="h1 p-5 m-5 rounded-3 home-leftbox text-white">
              <div class="p-3">FIND</div>
              <div class="p-3">IT</div>
              <div class="p-3">FAST</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex justify-content-around p-5 m-5 border-start border-5 border-info">
              <div class="bg-dark" style={{ maxWidth:"200px"}}><img src="photos/bg.png" style={{ maxWidth:"200px"}} class="rounded" id=""></img></div>
              <div class="bg-white">sdfsd</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="p-5 m-5 rounded-3" style={{ backgroundColor: "#dcc1ff9e" }}>
              <div class="h4 home-h5"><b>Tailored Recommendations For Every Desire!</b></div>
              <h5 class="mt-4">~Tired of shifting through endless options?</h5>
              <h5>~Find It Fast: Your wants, your way.</h5>
              <h5>~Tell us what you need, and we'll recommend just for you.</h5>
              <h5>~Say goodbye to information overload; say hello to personalized precision.</h5>
            </div>
          </div>
          <div class="col-md-6 p-5">
            <div class="btn btn-dark">Explore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
