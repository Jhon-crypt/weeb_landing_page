export default function DiscoverHero() {

    return (

        <>

            <div className="container-fluid col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-5">
                        <img src="./discover-hero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="col-lg-7">
                        <div id="discover_hero_small_text">
                            DISCOVER
                        </div>
                        <h1 id="discover_hero_text_heading" className="display-5 fw-bold lh-1 mb-3 text-light mb-5"><span style={{ color: '#C084FC' }}>Unlimited</span> ideas for your next projects</h1>
                        <p id="discover_hero_text" className="text-light mb-5">
                            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
                            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" id="landing-hero-button2">Discover Ideas</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}