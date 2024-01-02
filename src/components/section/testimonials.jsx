export default function Testimonials() {

    return (

        <>

            <div className="container-fluid col-xxl-8 px-4 py-5" style={{ backgroundColor: '#581C87' }}>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-sm-3">

                        <p id="discover_hero_text" className="text-light mb-5">
                            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                        </p>

                        <div className="d-flex">
                            <div className="flex-shrink-0">
                            <img className="mr-3" src="./user.png" alt="Generic placeholder image" />
                            </div>
                            <div className="flex-grow-1 ms-3 text-light">
                            <h5 className="mt-0">Rwanda Melflor</h5>
                                Co-founder Bigapp
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <img src="./mobile.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="100" loading="lazy" />
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3" id="discover_hero_small_text">
                            TESTIMONIALS
                        </div>
                        <h1 id="powerful_hero_text_heading" className="display-5 fw-bold lh-1 text-light mb-4">Bigapp got to the next level</h1>
                        <p id="discover_hero_text" className="text-light mb-5">
                            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.

                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" id="testimonial_view_case_study_button">View Case Study</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}