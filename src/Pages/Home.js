import Nav from "../Components/Nav";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
          <div class="col-md-6  d-flex justify-content-center align-items-center text-center">
            <div class="shadow border-start border-end border-5 border-info px-5 py-3">
              <video width="auto" height="300" autoPlay muted loop class="rounded-3">
                <source src="/videos/adsVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
          <div class="col-md-6 d-flex justify-content-center align-items-center text-center">
            <div class="btn home-explore-button text-white h1" style={{ padding: "3rem", width: "30rem" }}>
              Explore
              <ShoppingCartIcon />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
