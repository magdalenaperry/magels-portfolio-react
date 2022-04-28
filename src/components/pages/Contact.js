// import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="container pb-5">
        <section className="mb-4">

          <h2 className=" titles h1-responsive font-weight-bold text-center my-5 text-uppercase text-small">Contact Me</h2>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                  <div className="col-md-6 form-group">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        className="form-control mb-3"
                        placeholder='Name'></input>
                    </div>
                  </div>

                  <div className="col-md-6 form-group">
                    <div className="md-form mb-0 form-group">
                      <input
                        type="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        placeholder='Email'
                        className="form-control mb-3"></input>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control mb-3"
                        placeholder='Subject'></input>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-12">

                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Message'></textarea>
                    </div>

                  </div>
                </div>
              <div className="text-center text-md-left col-12 mt-5">
                <button type="submit" className="btn btn-primary btn-block">Send</button>
              </div>

              </form>

            </div>

            <div className="col-md-3 text-center pb-5">
              <ul className="list-unstyled mb-0 text-secondary">
                <li> < FaMapMarkerAlt />
                </li>
                <li>Charlotte, NC </li>
                

                <li><FaPhone /></li>
                <li> <a className="text-decoration-none text-secondary" href="tel:1234567890">(123) 456-7890 </a>
                </li>

                <li><FaEnvelope />
                </li>
                <li>
                  <a className="text-decoration-none text-secondary" href="mailto:mageltron@gmail.com">mageltron@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>

        </section>
      </div>
    </>
  );

}