import LogoLoop from "./React-componets/LogoLoop";

export default function Skills() {
  const techLogos = [
    { src: "src/assets/Logos/react.svg", alt: "React" },
    { src: "src/assets/logos/nextdotjs.svg", alt: "Next.js" },
    { src: "src/assets/logos/javascript.svg", alt: "JavaScript" },
    { src: "src/assets/logos/nodedotjs.svg", alt: "Node.js" },
    { src: "src/assets/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  ];

  return (
    <section className="relative min-h-[844px] w-full bg-[#0F0D0C] flex flex-col items-center justify-center gap-40">
      <div className="absolute top-0 left-[60px] h-[120px] w-[2px] bg-[#8A8175] max-sm:hidden mt-18" />

      <span className="absolute top-[120px] left-[90px] text-[#FF6310] max-sm:left-[20px]">
        02 Skills
      </span>
      <div className="flex items-center justify-between w-[50%] border-b-2 border-[#E3D4BC]/37 ">
        <h1 className="text-[#A8A39A] text-5xl font-bold mb-4">
          What I work with
        </h1>
        <p className="text-[#E3D4BC]/37 ">
          Grouped by role, not by logo. Depth over inventory.
        </p>
      </div>

      <div className="max-w-5xl border-r-2 border-l-2  p-7 border-[#8A8175]/37 ">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={70}
          gap={50}
          hoverSpeed={0}
          scaleOnHover={false}
          fadeOut={false}
          ariaLabel="Technologies I use"
        />
      </div>
    </section>
  );
}
