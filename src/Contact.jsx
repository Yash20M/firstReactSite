import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        fullName: "",
        Phone: "",
        Email: "",
        Message: ""
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${data.fullName} your Phone Number is ${data.Phone} email is ${data.Email}`)
        alert("Your form has been submited Successfully")
        navigate("/")
        window.location.reload();
    }

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="my-3 ">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 m-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Full Name"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={InputEvent}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="Number" maxLength={10} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"
                                    name="Phone"
                                    value={data.Phone}
                                    onChange={InputEvent} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"
                                    name="Email"
                                    value={data.Email}
                                    onChange={InputEvent}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="Message"
                                    value={data.Message}
                                    onChange={InputEvent}>

                                </textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit Form
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;