import { motion } from "motion/react";
import boy from "../../assets/images/boy.png";
import "../../App.css";

function Home() {
  return (
    // <div id="home" class=" mt-6 h-[80vh] md:h-[100vh] ">
    //   <div className="flex relative bg-[#a569bd] ">
    //     <div className="txt-div z-[5] mt-16  text-center md:text-start  ">
    //       <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-6">
    //         SAMI WAY <br /> Educational Limited
    //       </h1>
    //       <p className="font-bold mb-4">Making you relevant to the world</p>
    //       <p>
    //       Holistic Learning for Children & Adults <br className="hidden md:block" /> Teaching reading, writing, public speaking, <br className="hidden md:block"/> and core subjects to improve confidence and knowledge.
    //       </p>
    //       <div
    //         className="relative bg-white flex md:ml-0 mx-auto items-center
    //       p-4 shadow-xl justify-between w-[100%] h-[60px] mt-8"
    //       >
    //         <input
    //           className="w-full bg-transparent placeholder:text-slate-400 text-slate-700  outline-none "
    //           placeholder="Email"
    //           type="text"
    //         />
    //         <div className="bg-[#a569bd] h-full flex items-center absolute right-0 p-4 text-white cursor-pointer hover:bg-[#9d69bd]">
    //           Get in touch
    //         </div>
    //       </div>
    //     </div>

    //     <motion.div
    //       initial={{ opacity: 0, scale: 0 }}
    //       whileInView={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="w-[500px] hidden lg:block absolute top-[-150px] right-[30px]"
    //     >
    //       <img src={boy} alt="" />
    //     </motion.div>
    //   </div>
    // </div>

    <section className="px-[5%] md:mt-0 overflow-x-hidden">
      <div class="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div class="flex flex-col pt-[40px] md:pt-[150px]   text-center md:text-start">
      <motion.h1 
      initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
      whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
      transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold  mb-6">
            <span className="text-[#a569bd] font-bold ">SAMIWAY</span> <br /> Educational Limited
          </motion.h1>
          <motion.p 
                initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
                whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
                transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-semibold mb-4">Making you relevant to the world.</motion.p>
          <motion.p 
                initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
                whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
                transition={{ duration: 0.6, ease: "easeOut" }}>
            Holistic Learning for Children & Adults
            <br className="hidden md:block" /> Teaching reading, writing, public
            speaking, <br className="hidden md:block" /> and core subjects to
            improve confidence and knowledge.
          </motion.p>

          {/* Get in Touch  */}
          <motion.div
                initial={{  opacity: 0 ,y: 100}}    // Start 100px below, invisible
                whileInView={{ opacity: 1 ,y: 0 }}      // Animate to position
                transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white flex md:ml-0 mx-auto items-center
           p-4 shadow-xl justify-between w-[100%] h-[60px] mt-8"
          >
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700  outline-none "
              placeholder="Email"
              type="text"
            />
            <div className="bg-[#a569bd] h-full flex items-center absolute right-0 p-4 text-white
             cursor-pointer hover:bg-[#9d69bd]">
              Get in touch
            </div>
          </motion.div>
        </div>
        



        {/* Hero Image */}
        <motion.div
          class="flex justify-center items-center"
          initial={{ opacity: 0.5, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative top-[-20%]  right-[-20%]  md:right-[-60px] md:top-[-100px]"
        >
          <img
            src={boy}
            alt=""
            class="w-[250px] md:w-[500px]  drop-shadow"
          />
        </motion.div>

        {/* Form MObile */}
        {/* <motion.div
          class="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden absolute md:right-[-50px] md:top-[-90px]"
        >
          <img
            src={boy}
            alt=""
            class="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </motion.div> */}
      </div>
    </section>
  );
}

export default Home;
