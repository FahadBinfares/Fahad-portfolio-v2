import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="border-b-2 border-transparent hover:border-[#C7B79F] transition-colors duration-300 h-full flex items-center
     
      "
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="min-lg:hidden w-full fixed inset-0 bg-[#292625] z-40 flex flex-col gap-30 justify-center items-center">
          <button className="absolute top-6 right-6">
            <X color="#fffdfc" onClick={() => setIsOpen(!isOpen)} />
          </button>
          <div className="flex flex-col text-center items-center gap-8  w-full">
            <MobileNav name="Home" />
            <MobileNav name="About" />
            <MobileNav name="Skills" />
            <MobileNav name="Projects" />
            <MobileNav name="Contact" />
          </div>
          <div className="w-full px-20">
            <button
              className="bg-[#FF6310]
                rounded-[10px]
                px-20 py-5
                min-[37px]:px-0
                w-full
                font-bold
              text-[16px] min-[376px]:text-[17px] sm:text-2xl 
                "
            >
              Let's Contact
            </button>
          </div>
        </div>
      ) : (
        <>
          <Menu
            className="min-lg:hidden absolute right-3 top-4 "
            onClick={() => setIsOpen(!isOpen)}
            size={30}
            color="#ffffff"
          />

          <nav className="bg-[#1E1C1C] shadow-[0_2px_1px_#C7B79F] ">
            <div className="max-w-7x1 mx-auto px-6 h-15 flex items-center justify-evenly  2xl:h-20 text-center max-lg:justify-between">
              <a
                href="/"
                className="text-2x1  text-[#FF6310] w-fit   min-[2560px]:text-[2rem] 2xl:text-[1.5rem]   xl:text-[1.5rem]  lg:text-[1.1rem] items-center"
              >
                Fahad Binfares
              </a>
              <div className="flex gap-12 text-[#C8B79C] text-[16px] h-full text-center   min-[2560px]:text-[2rem] 2xl:text-[1.5rem]  xl:text-[1.5rem] lg:text-[1.1rem] max-lg:hidden">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">About</NavLink>
                <NavLink href="/">Skills</NavLink>
                <NavLink href="/">Projects</NavLink>
                <NavLink href="/">Experience</NavLink>
                <NavLink href="/">Contact</NavLink>
              </div>

              <button className="bg-[#FF6310]  min-[2560px]:w-50  2xl:w-50 2xl:font-semibold  rounded-[10px] cursor-pointer   min-[2560px]:text-[2rem] 2xl:text-[1.5rem]  lg:text-[1.1rem] xl:h-10 xl:w-30 lg:w-30 lg:h-9 max-lg:hidden">
                let's Talk
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

function MobileNav({ name }) {
  return (
    <a
      className="
    w-full
    py-4
    text-center
    cursor-pointer
    hover:text-white
    active:text-white
    transition-colors
    font-bold
    text-4xl
    text-[#A8A39A]
  
  "
    >
      {" "}
      {name}
    </a>
  );
}

export default Navbar;
("");
