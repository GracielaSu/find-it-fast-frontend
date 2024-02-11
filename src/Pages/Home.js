import Nav from "../Components/Nav"

function Home() {
  return (
    <div class="backgound">
      <Nav />
      <div class="d-flex justify-content-evenly px-5">
        <div class="container h1 p-5 m-5 rounded-3 home-leftbox text-white">
          <div class="p-3">FIND</div>
          <div class="p-3">IT</div>
          <div class="p-3">FAST</div>
        </div>
        <div class="container d-flex justify-content-around p-5 m-5 border-start border-5 border-info">
          <div class="bg-dark">sdfsd</div>
          <div class="bg-white">sdfsd</div>
          <div class="home-playbtn">sdfsd</div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly px-5">
        <div class="container p-5 m-5 rounded-3 home-leftbox  ">
          <div class="h5 home-h5"><b>Tailored Recommendations For Every Desire!</b></div>
        </div>
        <div class="container d-flex justify-content-around p-5 m-5 border-start border-5 border-info">
          <div class="bg-dark">sdfsd</div>
          <div class="bg-white">sdfsd</div>
          <div class="home-playbtn">sdfsd</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
