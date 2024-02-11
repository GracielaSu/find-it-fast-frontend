function Nav({ currentPage, accountName }) {
    return (
        <>
            <div class="navbar navbar-expand-md container-fluid d-flex justify-content-between text-white" id="nav-body">
                <div class="px-5"><img src="photos/logo.png" class="rounded-circle" id="logo"></img></div>
                <div class="d-flex justify-content-center px-5">
                    <div class="dropdown">
                        <div type="button" class="dropdown-toggle text-center" data-bs-toggle="dropdown">
                            <div class="h3">{currentPage ?? "Current Page"}</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></div>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item h6" href="#">Page 1</a></li>
                            <li><a class="dropdown-item h6" href="#">Page 2</a></li>
                            <li><a class="dropdown-item h6" href="#">Page 3</a></li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex px-5">
                    <div class="dropdown">
                        <div type="button" class="dropdown-toggle text-center" data-bs-toggle="dropdown">
                            <div class="h6">{accountName ?? "Account Name"}</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></div>
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
