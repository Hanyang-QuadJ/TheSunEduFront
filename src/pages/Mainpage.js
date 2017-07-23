import React, {Component} from 'react'
import theSunEduMainImg from '../img/theSunEduMainImg.jpeg'
import theSunImg2 from '../img/theSunImg2.jpeg'

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row main-page">
                <div className="main-image margin-top-appbar col-md-10 col-md-offset-1">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target={"#carousel-example-generic"} data-slide-to="0" className="active"/>
                            <li data-target={"#carousel-example-generic"} data-slide-to="1"/>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src={theSunEduMainImg}/>
                                <div className="carousel-caption">
                                    <h3>Carousel caption</h3>
                                </div>
                            </div>
                            <div className="item">
                                <img src={theSunImg2}/>
                            </div>
                        </div>

                        <a className="left carousel-control" href={"#carousel-example-generic"} role="button"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href={"#carousel-example-generic"} role="button"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
                <div className="main-page-content margin-top-20 col-md-10 col-md-offset-1">
                    <section id="services">
                        <div class="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading main-content-text">about The Sun Edu</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet
                                        consectetur.</h3>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"/>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"/>
                    </span>
                                    <h4 className="service-heading">E-Commerce</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"/>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"/>
                    </span>
                                    <h4 className="service-heading">Responsive Design</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"/>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"/>
                    </span>
                                    <h4 className="service-heading">Web Security</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default MainPage