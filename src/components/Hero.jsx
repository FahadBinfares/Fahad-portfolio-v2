import heroPhoto from "../assets/hero-photo.svg";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] relative z-10  ">
      <div
        style={{ backgroundImage: `url(${heroPhoto})` }}
        className="bg-cover bg-center min-h-[calc(100vh-80px)] "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50  "></div>

        {/* Content area */}
        <div className="relative w-full z-10 min-h-[calc(100vh-80px)] flex justify-center items-center h-full max-lg:items-start max-lg:py-60 ">
          <div className="w-full  flex flex-col gap-10   items-center  ">
            <h1 className="flex flex-col text-[4rem] leading-[1.2] font-bold min-[2560px]:text-[6rem] lg:text-[5rem]  items-center max-sm:text-[35px]">
              <span className=" text-white ">Fahad Binfare</span>
              <span className=" text-[#FF6310]">Software Engineer</span>
            </h1>
            <p
              className="flex
              flex-row
              justify-center
            text-white
              min-[2560px]:text-[1.5rem]
              max-sm:text-[9px]
              max-sm:justify-center
              flex-wrap p-2"
            >
              <span>
                Software engineer in Riyadh. I design and build web products
                with an eye
              </span>
              on performance, clarity and the details that survive contact with
              real users.
            </p>
            <div
              className="flex gap-2 justify-center mt-10 font-bold
                max-lg:absolute
                max-lg:bottom-6
                max-lg:left-0
                max-lg:right-0
                max-lg:flex-col
                max-lg:px-5 
                max-sm:mt-0"
            >
              <button
                className="
              bg-[#FF6310]
                rounded-[10px]
                px-9 py-4 mx-5
                min-2xl:w-[220px] "
              >
                View My Work
              </button>
              <button
                className="
              bg-[#1E1E1E]
              text-white
                rounded-[10px]
                px-9 py-4  mx-5
                min-2xl:w-[220px]"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
