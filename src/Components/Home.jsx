import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

function Home() {
  return (
    <div className="flex flex-col md:flex-row  justify-center gap-8 h-full items-center pb-16">
      <div className="w-[25%] pr-6">
        <img
          src="deeraj.jpg"
          alt="deeraj"
          className="rounded-full  outline outline-offset-2 outline-[4px] border-black"
        />
      </div>
      <div className="flex flex-col  items-center ">
        <p className="font-montserrat">Hello, I'm</p>
        <p className="font-rubik text-4xl font-semibold">
          Deeraj Alagarsamy V R
        </p>
        <p className="font-palanquin text-xl font-medium pt-2 pb-4">
          Front-end Developer
        </p>
        <button className="p-2 font-montserrat text-white bg-zinc-800 hover:bg-white text-xs rounded-3xl hover:border-2 hover:border-neutral-800 ">
          Resume
        </button>
        <div className="flex flex-row gap-2 pt-4">
          <IoLogoLinkedin className="text-3xl" />
          <FaGithub className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Home;
