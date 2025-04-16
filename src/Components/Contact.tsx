import bg from "../assets/images/pattern_pricing5.svg";

function Contact() {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative bg-fit bg-left bg-no-repeat h-full py-32"
    >
      <div className="w-10/12 flex gap-4 mx-auto px-64 ">
        <div className="text-[#172b4d] w-1/2 pt-48">
          <h1 className="text-5xl font-bold">Get in Touch</h1>
          <p>Flick us a message and we will get back to you shortly.</p>

          <div className="w-full flex-4 py-4">
            <div className="py-2 flex gap-4">
              <div className="p-6 h-1/2 bg-[#8a98eb80] rounded-full">
                <i></i>
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
              <div className="p-6 h-1/2 bg-[#8a98eb80] rounded-full">
                <i></i>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Call Us</h2>
                <p>
                  help@tbaccounting.co.nz
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
        <div className="w-1/2 h-full py-20 px-10 bg-[#172b4d] rounded-md">
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
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">Last name</label>
                <input
                  className="py-1 px-2 rounded-md"
                  type="text"
                  placeholder="Last Name..."
                  aria-label="Last Name..."
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
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label className="text-white">Business type</label>
                <select
                  className="py-1.5 px-2 rounded-md"
                  aria-label="Business type"
                  defaultValue="Option 1"
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                </select>
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
              />
            </div>
            {/* EMAIL END*/}
            {/* MESSAGE START*/}
            <div className="flex flex-col py-4">
              <label className="text-white">Your message</label>
              <textarea
                className="py-1 px-2 rounded-md"
                name="message"
              ></textarea>
            </div>
            {/* MESSAGE END*/}
            <button
              className="bg-rose-600 py-2 px-4 rounded-lg text-white"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
