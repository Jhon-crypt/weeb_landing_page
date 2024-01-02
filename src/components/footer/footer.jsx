export default function Footer() {

    return (

        <>

            <div className="container-fluid py-5 bg-white px-5">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-1 text-decoration-none">
                            <a id="footer_header" className="navbar-brand text-dark" href="#">Weeb</a>
                        </a>
                        <p className="text-body-secondary">&copy; Oladele John 2023</p>
                    </div>

                    <div className="col mb-3">
                        <h5 id="footer_nav_head_text">PRODUCT</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Overview</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Browse</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Accessibility</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Something</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 id="footer_nav_head_text">SOLUTIONS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Brainstorming</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ideation</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Wireframing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Research</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 id="footer_nav_head_text">RESOURCES</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help center</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tutorials</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 id="footer_nav_head_text">COMPANY</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Events</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                        </ul>
                    </div>
                </footer>
            </div>

        </>

    )

}