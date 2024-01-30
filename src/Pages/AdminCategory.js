import './AdminCategory.css'
import Nav from '../Components/Nav'

function AdminCategory() {
  return (
    <>
      <div class="container-flex" id="main-container">
        <Nav currentPage="Product Management" accountName="Customer 1"/>
        <div class="h1">Welcome to AdminCategory Find it fast</div>
      </div>
    </>
  );
}

export default AdminCategory;
