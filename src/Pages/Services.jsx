import Service from "../Components/Service/Service";

/* eslint-disable react/prop-types */
const Services = ({ services }) => {
  console.log(services);

  return (
    <div className="my-8">
      <div>
        <h2 className="text-2xl font-semibold text-center">Our Services</h2>
        <h1 className="text-3xl font-extrabold py-6 text-center">
        Explore Our Comprehensive Educational Event Planning Services
        </h1>
        <p className="text-lg font-medium text-center">
          "EduEventPro: Your Gateway to Success! Explore Our Comprehensive
          Educational Event Planning Services, <br /> Expertly Crafted to Elevate Every
          Aspect of Your Educational Events."
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
