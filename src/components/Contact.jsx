import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "./LoadingSpinner";

function Contact() {
  const [state, setState] = useState({ loading: false });

  const form = useRef();

  const sendEmail = (e) => {
    setState({ loading: true });
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oad7nci",
        "template_d8mao68",
        form.current,
        "ihue_m6KHhnWSnjlA"
      )
      .then(
        (result) => {
          form.current.reset();
          setState({ loading: false });
          toast(
            "Thank you!Your message has been successfully sent. We will contact you very soon!",
            {
              position: "top-right",
              autoClose: 5000,
                    }
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className=" py-4 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Contact Me
          </h1>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <img
                src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                alt="portfolio"
              />
            </div>

            <div className="rounded-lg bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
              {/* contact info  */}
              <div className="gap-4 grid mb-12 m-2 grid-cols-1 md:grid-cols-2">
                <Link
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-600  bg-[#000000] px-2 py-1 text-white hover:bg-transparent  focus:outline-none focus:ring active:text-indigo-500"
                  to="https://www.linkedin.com/in/sarvesh-pratap-230373221/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 64 64"
                    className="w-12 h-12"
                  >
                    <linearGradient
                      id="SUJNhpmDQDF27Y3OfwgfYa_44019_gr1"
                      x1="19"
                      x2="19"
                      y1="24.858"
                      y2="49.041"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#6dc7ff"></stop>
                      <stop offset="1" stopColor="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)"
                      fillRule="evenodd"
                      d="M22 48L22 26 16 26 16 48 22 48z"
                      // clip-rule="evenodd"
                    ></path>
                    <linearGradient
                      id="SUJNhpmDQDF27Y3OfwgfYb_44019_gr2"
                      x1="19.382"
                      x2="19.382"
                      y1="15.423"
                      y2="23.341"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#6dc7ff"></stop>
                      <stop offset="1" stopColor="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)"
                      fillRule="evenodd"
                      d="M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z"
                      // clip-rule="evenodd"
                    ></path>
                    <linearGradient
                      id="SUJNhpmDQDF27Y3OfwgfYc_44019_gr3"
                      x1="37.386"
                      x2="37.386"
                      y1="14.125"
                      y2="49.525"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#6dc7ff"></stop>
                      <stop offset="1" stopColor="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)"
                      fillRule="evenodd"
                      d="M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z"
                      clipRule="evenodd"
                    ></path>
                    <linearGradient
                      id="SUJNhpmDQDF27Y3OfwgfYd_44019_gr4"
                      x1="32"
                      x2="32"
                      y1="6.5"
                      y2="57.5"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#1a6dff"></stop>
                      <stop offset="1" stopColor="#c822ff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)"
                      d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium"> Linkedin </span>
                </Link>

                <Link 
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-600  bg-[#000000] px-2 py-1  text-white hover:bg-transparent  focus:outline-none focus:ring active:text-indigo-500"
                  to="https://github.com/Sarvesh9570"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 64 64"
                    className="w-12 h-12"
                  >
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1"
                      x1="30.999"
                      x2="30.999"
                      y1="16"
                      y2="55.342"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#6dc7ff"></stop>
                      <stop offset="1" stopColor="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)"
                      d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"
                    ></path>
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2"
                      x1="32"
                      x2="32"
                      y1="5"
                      y2="59.167"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#1a6dff"></stop>
                      <stop offset="1" stopColor="#c822ff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)"
                      d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium"> Github </span>
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-600  bg-[#000000] px-2 py-1  text-white hover:bg-transparent  focus:outline-none focus:ring active:text-indigo-500"
                  to="mailto:job.sarveshpratap@gmail.com"
                  target="_blank"
                >
                  <MdOutlineMarkEmailRead className="w-12 h-12" />

                  <span className="text-sm font-medium">
                    {" "}
                    job.sarveshpratap@gmail.com{" "}
                  </span>
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-600  bg-[#000000] px-2 py-1  text-white hover:bg-transparent  focus:outline-none focus:ring active:text-indigo-500"
                  to="https://wa.me/qr/S43R5JMFLGFWC1"
                  target="_blank"
                >
                  <FaWhatsapp className="w-10 h-10" />
                  <span className="text-sm font-medium"> WhatsApp </span>
                </Link>
              </div>

              {/* contact me form */}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4  border-gray-300  rounded-md"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg  bg-[#213469] border-gray-300 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300  bg-[#213469] p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300  bg-[#213469] p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-300  bg-[#213469] p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg  bg-[#213469] border-gray-300	 border-2 hover:bg-sky-700 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                  <div className="pt-4 ">
                    {state.loading && <LoadingSpinner />}
                    <ToastContainer></ToastContainer>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
