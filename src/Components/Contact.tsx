import { useState } from "react";

import bg from "../assets/images/pattern_pricing5.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState<string>("");
  
    const resetForm = () => {
      setFirstName("");
      setLastName("");
      setBusinessName("");
      setBusinessType("");
      setPhone("");
      setEmail("");
      setMessage("");
    };


  const toFormData = (emailMessage: any): FormData => {
    const formData = new FormData();

    // Add simple fields
    formData.append("firstName", emailMessage.firstName);
    formData.append("lastName", emailMessage.lastName);
    formData.append("businessName", emailMessage.businessName);
    formData.append("businessType", emailMessage.businessType);
    formData.append("phone", emailMessage.phone);
    formData.append("email", emailMessage.email);
    formData.append("message", emailMessage.message);

    return formData;
  };

  const sendEmail = async () => {
    setStatus("sending");
    const emailMessage = {
      firstName: firstName,
      lastName: lastName,
      businessName: businessName,
      businessType: businessType,
      phone: phone,
      email: email,
      message: message,
    };

    const formData = toFormData(emailMessage);
    
    const url = `${process.env.REACT_APP_API_URL}?code=${process.env.REACT_APP_API_KEY}`;
      try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        // grab any error text the API returns
        const text = await response.text();
        throw new Error(text || "Network response was not ok");
      }
      setStatus("success");
      resetForm();
      } catch (err: any) {
        console.error("Error:", err);
        setErrorMsg(err.message || "Something went wrong");
        setStatus("error");
      }
  };

  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative bg-fit bg-left bg-no-repeat h-full lg:py-32"
    >
      {/* DESKTOP */}
      <div className="w-12/12 lg:flex hidden gap-4 mx-auto 2xl:px-64 lg:px-32">
        {/* LEFT SIDE */}
        <div className="text-[#172b4d] w-1/2 pt-48">
          <h1 className="text-5xl font-bold">Get in Touch</h1>
          <p>Flick us a message and we will get back to you shortly.</p>

          <div className="w-full flex-4 py-4">
            <div className="py-2 flex gap-4">
              <div className="p-6 w-[60px] h-[60px] bg-[#8a98eb80] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationPin} className="text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold">Based in</h2>
                <p>
                  Lincoln,
                  <br />
                  Christchurch,
                  <br />
                  New Zealand
                </p>
              </div>
            </div>
            <div className="py-2 flex gap-4">
              <div className="p-6 w-[60px] h-[60px] bg-[#8a98eb80] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faMailBulk} className="text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold">Call Us</h2>
                <p>
                  support@rrgroup.co.nz
                  <br />
                  +64 021 821 8338
                  <br />
                  Mon - Fri, 8:30-17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="xl:w-1/2 h-full py-20 px-10 bg-[#172b4d] rounded-md">
          <h4 className="text-4xl font-semibold text-center text-white">
            Contact Us
          </h4>
          <form method="post" className="pt-8 text-lg font-normal">
            {/* FIRST LAST NAMES START*/}
            <div className="flex gap-4 py-2">
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">First name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">Last name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            {/* FIRST LAST NAMES END*/}
            {/* BUSINESS NAME TYPE START*/}
            <div className="flex gap-4 py-2">
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">Business name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Business name"
                  aria-label="Business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">Business type</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Business type"
                  aria-label="Business type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
            </div>
            {/* BUSINESS NAME TYPE END*/}
            {/* PHONE START*/}
            <div className="flex flex-col py-2">
              <label className="text-white">Phone</label>
              <input
                className="py-1 px-2 rounded-md"
                type="text"
                placeholder="Phone number"
                aria-label="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* PHONE END*/}
            {/* EMAIL START*/}
            <div className="flex flex-col py-2">
              <label className="text-white">Email address</label>
              <input
                className="py-1 px-2 rounded-md"
                type="text"
                placeholder="Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* EMAIL END*/}
            {/* MESSAGE START*/}
            <div className="flex flex-col py-4">
              <label className="text-white">Your message</label>
              <textarea
                className="py-1 px-2 rounded-md"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            {/* MESSAGE END*/}
            <button
              className="bg-rose-600 py-2 px-4 rounded-lg text-white"
              type="button"
              disabled={status === "sending"}
              onClick={sendEmail}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {/* feedback area */}
            {status === "success" && (
              <p className="text-green-600">Your message has been sent! 🎉</p>
            )}
            {status === "error" && (
              <div className="text-red-600 space-y-1">
                <p>Failed to send message: {errorMsg}</p>
                <p>
                  Or contact us directly at{" "}
                  <a
                    href="mailto:support@tbaccounting.rrgroup.co.nz"
                    className="underline hover:text-red-800"
                  >
                    support@tbaccounting.rrgroup.co.nz
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Mobile */}
      <div className="w-12/12 lg:hidden block gap-4 mx-auto 2xl:px-64 lg:px-32 pt-12">
        {/* LEFT SIDE */}
        <div className="text-[#172b4d] w-full py-8 text-center">
          <h1 className="text-5xl font-bold">Get in Touch</h1>
          <p>Flick us a message and we will get back to you shortly.</p>

          <div className="w-full sm:flex sm:gap-16 py-4 justify-center">
            <div className="py-2 sm:flex gap-4 mx-auto">
              <div className="p-6 w-[50px] h-[50px] bg-[#8a98eb80] rounded-full mx-auto my-2 flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationPin} className="text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold">Based in</h2>
                <p>
                  Lincoln,
                  <br />
                  Christchurch,
                  <br />
                  New Zealand
                </p>
              </div>
            </div>
            <div className="py-2 sm:flex gap-4 mx-auto">
              <div className="p-6 w-[50px] h-[50px] bg-[#8a98eb80] rounded-full mx-auto my-2 flex items-center justify-center">
                <FontAwesomeIcon icon={faMailBulk} className="text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold">Call Us</h2>
                <p>
                  support@rrgroup.co.nz
                  <br />
                  +64 021 821 8338
                  <br />
                  Mon - Fri, 8:30-17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="sm:w-10/12 h-full py-20 px-10 bg-[#172b4d] rounded-md mx-auto">
          <h4 className="text-4xl font-semibold text-center text-white">
            Contact Us
          </h4>
          <form method="post" className="pt-8 text-lg font-normal">
            {/* FIRST LAST NAMES START*/}
            <div className="sm:flex gap-4 py-2">
              <div className="flex flex-col sm:w-1/2 gap-1">
                <label className="text-white">First name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:w-1/2 gap-1 sm:pt-0 pt-4">
                <label className="text-white">Last name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            {/* FIRST LAST NAMES END*/}
            {/* BUSINESS NAME TYPE START*/}
            <div className="sm:flex gap-4 py-2">
              <div className="flex flex-col sm:w-1/2 gap-1">
                <label className="text-white">Business name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Business name"
                  aria-label="Business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:w-1/2 gap-1 sm:pt-0 pt-4">
                <label className="text-white">Business type</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Business type"
                  aria-label="Business type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
            </div>
            {/* BUSINESS NAME TYPE END*/}
            {/* PHONE START*/}
            <div className="flex flex-col py-2">
              <label className="text-white">Phone</label>
              <input
                className="py-1 px-2 rounded-md"
                type="text"
                placeholder="Phone number"
                aria-label="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* PHONE END*/}
            {/* EMAIL START*/}
            <div className="flex flex-col py-2">
              <label className="text-white">Email address</label>
              <input
                className="py-1 px-2 rounded-md"
                type="text"
                placeholder="Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* EMAIL END*/}
            {/* MESSAGE START*/}
            <div className="flex flex-col py-4">
              <label className="text-white">Your message</label>
              <textarea
                className="py-1 px-2 rounded-md"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            {/* MESSAGE END*/}
            <button
              className="bg-rose-600 py-2 px-4 rounded-lg text-white"
              type="button"
              disabled={status === "sending"}
              onClick={sendEmail}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {/* feedback area */}
            {status === "success" && (
              <p className="text-green-600">Your message has been sent! 🎉</p>
            )}
            {status === "error" && (
              <div className="text-red-600 space-y-1">
                <p>Failed to send message: {errorMsg}</p>
                <p>
                  Or contact us directly at{" "}
                  <a
                    href="mailto:support@tbaccounting.rrgroup.co.nz"
                    className="underline hover:text-red-800"
                  >
                    support@tbaccounting.rrgroup.co.nz
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </div>
        {/* <img className="mx-auto py-12 w-[90px]" src={logo} alt="tba logo" /> */}
      </div>
    </div>
  );
}

export default Contact;
