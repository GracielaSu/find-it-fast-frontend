import './Nav.css'

function Nav({currentPage, accountName}) {
    return (
        <>
            <div class="navbar navbar-expand-md container-fluid d-flex text-white" id="nav-body">
                <div class="col-2 px-5"><img src="photos/logo.png" class="rounded-circle" id="logo"></img></div>
                <div class="col-8 d-flex justify-content-center px-5">
                    <div class="dropdown">
                        <div type="button" class="dropdown-toggle text-center" data-bs-toggle="dropdown">
                            <div class="h3">{currentPage}</div>
                            <div>V</div>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item h6" href="#">Page 1</a></li>
                            <li><a class="dropdown-item h6" href="#">Page 2</a></li>
                            <li><a class="dropdown-item h6" href="#">Page 3</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-center px-5">
                    <div class="dropdown">
                        <div type="button" class="dropdown-toggle text-center" data-bs-toggle="dropdown">
                            <div class="h6">{accountName}</div>
                            <div>V</div>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item h6" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
