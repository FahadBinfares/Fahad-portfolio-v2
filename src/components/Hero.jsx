import heroPhoto from "../assets/hero-photo.svg";
import BlurText from "./React-componets/BlurText";

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
          <div className="w-full  flex flex-col gap-10   items-center max-md:gap-22  ">
            <div className="flex flex-col items-center  ">
              <BlurText
                text="Fahad Binfares"
                delay={130}
                animateBy="words"
                direction="top"
                className="text-[5rem] text-white  leading-[1.2] font-bold min-[2560px]:text-[6rem] lg:text-[5rem]  items-center max-sm:text-[35px]"
              />
              <BlurText
                text="Software Engineer"
                delay={10}
                animateBy="words"
                direction="top"
                className="text-[5rem]  text-[#FF6310]  leading-[1.2] font-bold min-[2560px]:text-[6rem] lg:text-[5rem]  items-center max-sm:text-[30px]"
              />
            </div>
            <p
              className="flex
              flex-row
              text-white
              min-2xl:text-[2.5rem]
              min-xl:text-[2rem]
              min-lg:text-[1.5rem]
              min-md:text-[1.5rem]
              max-[375px]:text-[rem]
              flex-wrap
              justify-center
              text-center
              p-2
              text-balance"
            >
              Software engineer in Riyadh. I design and build web products with
              an eye on performance, clarity and the details that survive
              contact with real users.
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
              <a
                href="https://github.com/FahadBinfares"
                target="_blank"
                className="min-[2560px]:text-[1.5rem] min-[2560px]:w-full inline-flex items-center justify-center bg-[#FF6310] rounded-[10px] px-9 py-4 mx-5 min-2xl:w-fit"
              >
                View My Work
              </a>
              <a
                href="mailto:fahadalfars100@email.com"
                target="_blank"
                className="
                min-[2560px]:text-[1.5rem]
                inline-flex items-center justify-center
              bg-[#1E1E1E]
              text-white
                rounded-[10px]
                px-9 py-4  mx-5
                min-2xl:w-fit"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
