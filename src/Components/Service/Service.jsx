import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Service = ({ service }) => {
  const {id, img, service_name, price, short_description } = service || {};

  return (
    <div className="w-11/12"
    //   data-aos="flip-left"
    //   data-aos-easing="ease-out-cubic"
    //   data-aos-duration="2000"
    >
      <div className=" flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700">
        <div className=" mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={img} className="h-full w-full object-cover" alt="Product" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {service_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {short_description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to="/services">
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
