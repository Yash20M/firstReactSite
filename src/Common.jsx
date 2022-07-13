import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center justify-content-center">
                <div className="container-fluid nav_bg" >
                    <div className="row">
                        <div className="col-10 mx-auto" >
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column align-items-center">
                                    <h1>{props.heading} <strong className="brand_name">Cookie.Hire</strong></h1>
                                    <h2 className="my-3">
                                        We are the Finest <strong className="brand_name"><i>MERN</i></strong> Stack Developer
                                    </h2>

                                    <div className="mt-3 ">
                                        <NavLink className="btn-get-sarted" to={props.visit}>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img mb-5">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Home " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;