import { useState } from "react";


function ContactSmall() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
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
  
      const url = "https://kazukicomapi.azurewebsites.net/api/EmailTbaccounting?code=kO16RHuZUjBEE15xL-zBaAIZe0RXlRPSn3XSTTBkP4gOAzFup2hlAg=="; // Your Azure API endpoint
      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        // const result = await response.json(); // Parse the response as JSON
        // console.log(result); // Handle the result (e.g., display message, update state)
      } catch (error) {
        console.error("Error:", error);
      }
    };
  return (
    <div className="w-11/12 py-16 text-[#172b4d] md:bg-transparent bg-white mx-auto rounded-md">
      <h2 className="w-fit font-bold bg-sky-300 py-1 px-2 rounded-md mx-auto">
        Leave a message
      </h2>
      <h1 className="text-5xl font-semibold text-center md:px-0 px-4">
        Tell us how we can help you
      </h1>
      <h3 className="text-center text-xl py-4 md:px-0 px-4">
        Whether you have questions or you would just like to say hello, contact
        us.
      </h3>

      <form
        method="post"
        style={{
          boxShadow: "0 15px 35px #32325d1a, 0 5px 15px #00000012",
        }}
        className="2xl:w-2/5 xl:w-4/5 bg-gray-100 md:mt-12 p-6 rounded-lg shadow-md mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business name
            </label>
            <input
              type="text"
              placeholder="Business Name"
              aria-label="Business Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          {/* Business Type */}
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business type
            </label>
            <input
              type="text"
              placeholder="Business type"
              aria-label="Business type"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="text"
              placeholder="Email Here"
              aria-label="Email Here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Business Type */}
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
            </label>
            <input
              type="text"
              placeholder="Phone number"
              aria-label="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
                  onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your message
          </label>
          <textarea
            name="message"
            rows={6}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
                  onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-right">
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            onClick={sendEmail}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactSmall;
