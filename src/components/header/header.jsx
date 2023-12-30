export default function Header() {

    return (

        <>

            <nav id="header-container" className="mt-3 navbar mx-auto navbar-expand-lg">
                <div className="container-fluid">
                    <a id="mobile-nav" className="navbar-brand" href="#">Weeb</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a id="header_text" className="navbar-brand text-light" href="#">Weeb</a>
                        <ul id="header_list_text" className="text-light navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
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
                        <form className="d-flex" role="search">
                            <button id="header_list_login_button" className="btn btn-md text-light me-3" type="submit">Login</button>
                            <button id="header_list_signup_button" type="submit">Sign Up Free</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )

}