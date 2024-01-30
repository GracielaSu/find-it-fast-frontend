import './Home.css'
import Nav from '../Components/Nav'

function Home() {
  return (
    <>
      <div class="container-flex" id="main-container">
        <Nav currentPage="Product Management" accountName="Customer 1"/>
      </div>
    </>
  );
}

export default Home;
