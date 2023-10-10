const Testimonials = () => {
  return (
    <div>
      <section className="text-gray-600 my-8 ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            What our clients are saying
          </h1>

          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 -m-4">
            <div
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.ibb.co/2jQPh3s/team1.jpg"
                />
                <p className="leading-relaxed">
                  "I was amazed by the professionalism and dedication of the
                  EduEventPro team. They turned our vision into a reality,
                  making our event a huge success. The attention to detail and
                  personalized approach made all the difference. We couldn't be
                  happier!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.ibb.co/4YhynVV/testimonial2.jpg"
                />
                <p className="leading-relaxed">
                  "Working with the EduEventPro team was a delight. From
                  conceptualizing the event to execution, they handled
                  everything seamlessly. Their creative ideas and flawless
                  execution made our EduEventPro-hosted event memorable for both
                  students and faculty. Highly recommended!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>
            <div
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.ibb.co/XyXLjtF/testimonial3.jpg"
                />
                <p className="leading-relaxed">
                  "Thanks to the expertise of the EduEventPro team, our event
                  went off without a hitch. Their proficiency in coordinating
                  every aspect of the event, from scheduling to logistics,
                  ensured a stress-free experience. We received rave reviews
                  from attendees. Looking forward to our next collaboration with
                  EduEventPro!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
