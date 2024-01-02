export default function DesignEvents() {

    return (

        <>

            <div className="container-fluid px-4 py-5 bg-white" id="custom-cards">

                <div className="clearfix">
                    <span className="float-start">
                        <h2 className="pb-2" id="design_events_text_left_header">Design events near you</h2>
                    </span>
                    <span className="float-end" id="design_events_text_right_header">
                        <button type="button" id="design_events_text_right_button">Explore events</button>
                    </span>
                </div>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch mt-5">

                    <div className="col mb-5">

                        <div className="card border border-0" style={{width:"350px"}}>
                            <img className="card-img-top" src="./card1.png" alt="Card image" />
                            <div className="card-img-overlay">
                                <a id="design_events_card_top_button">Design Thinking</a>
                            </div>
                            <div className="mt-3">
                                <span id="design_events_card_small_text">Design Thinking</span>
                                <h4 id="design_events_card_header">Wild Horse Event</h4>
                                <button id="design_events_card_button">Buy Tickets</button>
                            </div>
                        </div>

                    </div>

                    <div className="col mb-5">

                        <div className="card border border-0" style={{width:"350px"}}>
                            <img className="card-img-top" src="./card2.png" alt="Card image" />
                            <div className="card-img-overlay">
                                <a id="design_events_card_top_button">Festival</a>
                            </div>
                            <div className="mt-3">
                                <span id="design_events_card_small_text">Festival</span>
                                <h4 id="design_events_card_header">Music & Colors</h4>
                                <button id="design_events_card_button">Buy Tickets</button>
                            </div>
                        </div>

                    </div>

                    <div className="col mb-5">

                        <div className="card border border-0" style={{width:"350px"}}>
                            <img className="card-img-top" src="./card3.png" alt="Card image" />
                            <div className="card-img-overlay">
                                <a id="design_events_card_top_button">Bootcamp</a>
                            </div>
                            <div className="mt-3">
                                <span id="design_events_card_small_text">Bootcamp</span>
                                <h4 id="design_events_card_header">Bootcamp Day</h4>
                                <button id="design_events_card_button">Buy Tickets</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}