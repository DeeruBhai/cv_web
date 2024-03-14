import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center gap-8 h-full items-center pb-16  absolute z-20 max-container  ">
        <div className="md:w-[25%] w-[50%] pr-6">
          <img
            src="deeraj.jpg"
            alt="deeraj"
            className="rounded-full  outline outline-offset-2 outline-[4px] border-black"
          />
        </div>
        <div className="flex flex-col  items-center ">
          <p className="font-montserrat">Hello, I'm</p>
          <p className="font-rubik text-xl md:text-4xl font-semibold">
            Deeraj Alagarsamy V R
          </p>
          <p className="font-palanquin text-xl font-medium pt-2 pb-4">
            Front-end Developer
          </p>
          <button className="p-2 font-montserrat text-black hover:bg-zinc-800 bg-white border-2 border-zinc-800 text-xs rounded-3xl hover:border-2 hover:border-neutral-800 hover:text-white ">
            Resume
          </button>
          <div className="flex flex-row gap-2 pt-4">
            <IoLogoLinkedin className="text-3xl" />
            <FaGithub className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="max-container sm:w-full max-sm:w-full overflow-hidden  absolute md:bottom-0 sm:bottom-0 max-sm:bottom-0 ">
        <motion.div
          className="  md:text-[50vh] sm:text-[50vh] max-sm:text-[30vh] whitespace-nowrap  text-gray-400/20 font-orbitron font-bold  w-1/2"
          initial={{ x: 0 }}
          animate={{ x: "-220%" }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 20 }}
        >
          Front-end Developer
        </motion.div>
      </div>
    </>
  );
}

export default Home;
