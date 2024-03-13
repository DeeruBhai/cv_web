import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pagelinks } from "../Constants";
function NavBar() {
  const [hamClick, setHamClick] = useState(false);

  return (
    <header
      className="px-8 py-6 relative z-10 w-full bg-[#fff] max-container border-b-2 border-[#fff]
    "
    >
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <div className="flex flex-col justify-center items-center gap-2">
            {/* <img
              src={homeicon}
              alt="headerlogo"
              width={50}
              height={20}
              className="text-[#E26EE5]"
            /> */}
            {/* <p className="text-[#FFD0EC]">Crypt</p> */}
          </div>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {pagelinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="font-rubik leading-normal text-lg text-[#040404] hover:text-[#5356FF] "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* */}
        <div className="hidden max-md:block">
          <GiHamburgerMenu
            className="text-[#040404] text-xl"
            onClick={() => setHamClick(true)}
          />
        </div>
        {hamClick && (
          <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 left-0 z-20 transition-all delay-75">
            <div className="text-[#040404]  bg-[#F3F8FF] flex-col absolute right-0 top-0 h-full p-8  z-50 flex">
              <div className="self-end">
                {/* <FontAwesomeIcon
                  icon={faXmark}
                  className="text-coral-red mb-8 text-4xl cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                /> */}
                <IoClose
                  className="text-coral-red mb-8 text-4xl cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                />
              </div>
              <ul className="flex-1 flex-col flex justify-center items-center gap-16 p-12">
                {pagelinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      className="font-rubik leading-normal text-3xl text-[#040404]  hover:text-[#5356FF]"
                      onClick={() => setHamClick(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
