import bg from "../assets/images/p31.svg";

function Services() {
  return (
    <div
      id="services"
      className="relative w-full h-[800px] bg-[#172b4d] bg-cover bg-center bg-no-repeat flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="w-2/5 h-full mx-auto pt-24 pb-24 text-center">
        <h1 className="text-white text-5xl font-bold py-10">
          Build something great
          <br />
          <span className="text-rose-500 font-semibold">with our services</span>
        </h1>
        <h3 className="text-white text-2xl">
          TB Accounting is committed to providing tailored financial solutions
          to help businesses thrive. Whether you're a small business owner or an
          individual navigating personal finances, I offer a range of services
          designed to meet your unique needs.
        </h3>
      </div>
      <div className="flex">
        
      </div>
    </div>
  );
}

export default Services;
