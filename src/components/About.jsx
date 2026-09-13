export default function About() {
  return (
    <section id="About" className="relative min-h-[920px] w-full bg-[#0F0D0C]">
      {/* Top line */}
      <div className="absolute top-0 left-[60px] h-[120px] w-[2px] bg-[#8A8175]  max-sm:hidden  mt-18" />

      {/* Bottom line */}

      {/* Section label */}
      <span className="absolute top-[120px] left-[90px]  font-bold text-[#FF6310]  max-sm:left-[20px]">
        01 ABOUT
      </span>

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-5 pt-50">
        {/* Two columns */}
        <div className="grid grid-cols-[1.4fr] text-center gap-20 max-sm:grid-cols-1">
          {/* Left */}
          <h1 className="flex flex-col text-[3.5rem] font-bold text-[#A8A39A] max-sm:text-[1.5rem]">
            Software Engineer
          </h1>

          {/* Right */}
          <div className="flex flex-col gap-20">
            <p className="text-[#A8A39A] max-sm:text-[12px] lg:text-[1.5rem]">
              I build web software — interfaces, APIs and the connective work in
              between. My interest is in systems that stay readable a year
              later.
            </p>

            <p className="font-inter font-light text-[#E3D4BC]/24 max-sm:text-[12px] lg:text-[1.5rem]">
              Most of my work sits in JavaScript and React on the front, Node
              and REST services behind it. I care about the parts users feel
              first: how fast a page becomes usable, whether the state is
              honest, whether an error tells you what to do next.
            </p>

            <div className="h-0.5 w-full bg-[#292625]" />

            {/* Education + Focus */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[#5D5755] text-2xl max-xl:text-[18px] max-lg:text-[12px]">
                  EDUCATION
                </h2>

                <h2 className="text-white text-2xl max-xl:text-[18px] max-lg:text-[12px]">
                  B.Sc. Computer Science
                </h2>

                <h2 className="text-2xl max-xl:text-[18px] max-lg:text-[12px] max-sm:text-[7px] text-[#5D5755] ">
                  Open Arab University - Riyadh
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[#5D5755]  text-2xl max-xl:text-[18px] max-lg:text-[12px]">
                  FOCUS
                </h2>

                <h2 className="text-white text-2xl max-xl:text-[18px] max-lg:text-[12px]">
                  Software Development
                </h2>

                <h2 className=" text-2xl max-xl:text-[18px] max-lg:text-[12px] max-sm:text-[7px] text-[#5D5755]">
                  React - NextJs - Node - Rest
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
