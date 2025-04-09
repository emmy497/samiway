import { motion } from "motion/react";

import Testimonials from "../Testimonials/Testimonials.jsx";

function About() {
  return (
    <section
      className="px-[5%]  mb-10px relative top-[-70px] md:static
     "
    >
      <div id="about" className="">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="relative top-[20px] bg-[#a569bd] rounded-xl shadow-2xl md:w-[70%] mx-auto
           text-center text-white p-[5px] mb-14 md:p-10  md:mb-[100px] max-h-[600px]"
        >
          <div className="text-3xl font-semibold ">Who are we?</div>
          <div className="about-paragraph text-center p-4 ">
            At Samiway Educational Consult, we empower learners of all ages with
            the skills they need to succeed. We specialize in reading, writing,
            and communication for children, youth, and adults—whether for
            academic excellence, career advancement, or personal growth. Our
            expert instructors use engaging, practical methods to make learning
            enjoyable. Beyond literacy, we offer subject tutoring, ensuring a
            well-rounded and adaptable education.
          </div>
        </motion.div>
      </div>

      <div className="video-section mb-10 md:mb-0">
        <div className="text-center font-semibold text-2xl mb-6 ">
          Meet our Instructors
        </div>

        <div className="videos flex flex-col md:flex-row  justify-evenly items-center gap-y-4 ">
          <iframe
            className=" w-[80%] md:w-[300px] h-[200px] rounded"
            src="https://www.youtube.com/embed/GWsryvZfeYw?si=n-gp9SEB9uNhpF4r"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
         web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

  
          <iframe
            className="w-[80%] md:w-[300px] h-[200px]  rounded"
            src="https://www.youtube.com/embed/XQX2Jky-_ys?si=wH7O4enPJWmOy1DE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            className="w-[80%] md:w-[300px] h-[200px] rounded h-[200px] "
            src="https://www.youtube.com/embed/f8U1N0mJhG8?si=Zdz-FYYE2U_MeKgG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          {/* <video
            controls
            className="w-[80%] md:w-[250px] h-[200px] rounded h-[200px] "
          >
            <source src={} type="video/mp4" />
          </video> */}
        </div>
      </div>

      {/* Our Mission and Vision */}

      <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-4 md:mt-[90px]  md:mb-[70px] mb-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start 100px below, invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mission shadow-xl p-4 rounded-xl bg-[#a569bd] text-white max-w-[500px]"
        >
          <div className="text-3xl mb-4 font-semibold">Our Mission</div>
          <div>
            To provide high-quality education and training that empowers
            individuals to stay relevant, excel in their careers, and thrive in
            life through innovative teaching, expert guidance, and a commitment
            to lifelong learning.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start 100px below, invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="vision shadow-xl p-4 rounded-xl bg-[#a569bd] text-white max-w-[500px]"
        >
          <div className="text-3xl mb-4  font-semibold">Our Vision</div>
          <div>
            To equip individuals with the knowledge, skills, and mindset to stay
            relevant, adaptable, and successful in life and their careers.
          </div>
        </motion.div>
      </div>

      <Testimonials />
    </section>
  );
}

export default About;
