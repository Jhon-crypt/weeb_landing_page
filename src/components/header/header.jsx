export default function Header() {

    return (

        <>

            <nav id="header-container" className="mt-3 navbar mx-auto navbar-expand-lg">
                <div className="container-fluid">
                    <a id="mobile-nav" className="navbar-brand" href="#">Weeb</a>
                    <div className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M12 14H22C22.5304 14 23.0391 14.2107 23.4142 14.5858C23.7893 14.9609 24 15.4696 24 16C24 16.5304 23.7893 17.0391 23.4142 17.4142C23.0391 17.7893 22.5304 18 22 18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14V14ZM26 30H36C36.5304 30 37.0391 30.2107 37.4142 30.5858C37.7893 30.9609 38 31.4696 38 32C38 32.5304 37.7893 33.0391 37.4142 33.4142C37.0391 33.7893 36.5304 34 36 34H26C25.4696 34 24.9609 33.7893 24.5858 33.4142C24.2107 33.0391 24 32.5304 24 32C24 31.4696 24.2107 30.9609 24.5858 30.5858C24.9609 30.2107 25.4696 30 26 30ZM12 22H36C36.5304 22 37.0391 22.2107 37.4142 22.5858C37.7893 22.9609 38 23.4696 38 24C38 24.5304 37.7893 25.0391 37.4142 25.4142C37.0391 25.7893 36.5304 26 36 26H12C11.4696 26 10.9609 25.7893 10.5858 25.4142C10.2107 25.0391 10 24.5304 10 24C10 23.4696 10.2107 22.9609 10.5858 22.5858C10.9609 22.2107 11.4696 22 12 22Z" fill="white" />
                        </svg>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a id="header_text" className="navbar-brand text-light" href="#">Weeb</a>
                        <ul id="header_list_text" className="text-light navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <a className="nav-link active text-light">About Us</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link active text-light">Solutions</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link active text-light">Pricing</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link active text-light">Resources</a>
                            </li>
                        </ul>
                        <div id="header_buttons" className="d-flex" role="search">
                            <button id="header_list_login_button" className="btn btn-md text-light me-3" type="submit">Login</button>
                            <button id="header_list_signup_button" type="submit">Sign Up Free</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )

}