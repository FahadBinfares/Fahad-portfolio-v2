import LogoLoop from "./React-componets/LogoLoop";

export default function Skills() {
  const techLogos = [
    { src: "src/assets/Logos/react.svg", alt: "React" },
    { src: "src/assets/logos/nextdotjs.svg", alt: "Next.js" },
    { src: "src/assets/logos/javascript.svg", alt: "JavaScript" },
    { src: "src/assets/logos/nodedotjs.svg", alt: "Node.js" },
    { src: "src/assets/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  ];
  const isMobile = window.innerWidth < 640;

  return (
    <section
      id="Skills"
      className="relative min-h-[844px] w-full bg-[#0F0D0C] flex flex-col items-center justify-center gap-40 px-4"
    >
      <div className="absolute top-0 left-[60px] h-[120px] w-[2px] bg-[#8A8175] max-sm:hidden mt-18 " />

      <span className="absolute top-[120px] left-[90px]  font-bold text-[#FF6310] max-sm:left-[20px]">
        02 SKILLS
      </span>
      <div className="flex items-center justify-between w-[50%] 2xl:border-b-2 border-[#E3D4BC]/37 max-sm:w-full max-sm:p-5 max-sm:justify-center  max-2xl:justify-center  ">
        <h1 className="text-[#A8A39A]  font-bold mb-4 text-[30px] md:text-[45px]  lg:text-text-[3.5rem] 2xl:text-[3.5rem] xl:text-[3.5rem]  max-sm:text-wrap">
          What I work with
        </h1>
        <p className="text-[#E3D4BC]/37 max-sm:hidden max-2xl:hidden 2xl: ">
          Grouped by role, not by logo. Depth over inventory.
        </p>
      </div>

      <div className=" w-full max-w-5xl border-x-2 p-7 border-[#8A8175]/37  ">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={isMobile ? 40 : 70}
          gap={isMobile ? 25 : 50}
          hoverSpeed={0}
          scaleOnHover={false}
          fadeOut={false}
          ariaLabel="Technologies I use"
        />
      </div>
    </section>
  );
}
