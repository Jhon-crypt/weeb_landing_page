export default function LandingHero() {

    return (

        <>

            <div className="px-4 py-5 my-5 text-center">
                <h1 id="landing-hero-text-header" className="display-5 fw-bold">Design <span id="landing_hero_text_header_underline">Faster</span> & Better<div id="landing_hero_text_header_underline2"></div></h1>
                <div className="col-lg-6 mx-auto">
                    <p id="landing-hero-text" className="mt-4 lead mb-4">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-center">
                        <button type="button" className="" id="landing-hero-button1">Join Now</button>
                        <button type="button" id="landing-hero-button2">View Demo</button>
                    </div>
                </div>
                <br /><br />
                <div className="overflow-hidden mt-4">
                    <div className="container">
                        <img src="./hero.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="900" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>

        </>

    )

}