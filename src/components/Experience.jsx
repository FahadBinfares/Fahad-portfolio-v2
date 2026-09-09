export default function Experience() {
  return (
    <section className="relative min-h-211  w-full bg-[#0F0D0C] flex flex-col justify-start items-center gap-30 px-4 pb-22">
      <div className="p-10">
        <div className="absolute top-0 left-15 h-30  w-0.5 bg-[#8A8175] max-sm:hidden mt-18" />
        {/*Project section*/}
        <span className="absolute top-20 left-22.5 font-bold text-[#FF6310] max-sm:left-5">
          04 EXPERIENCE
        </span>
      </div>
      <h1 className="text-3xl md:text-6xl leading-tight text-[#A8A39A] font-bold text-center">
        Where I’ve Work
      </h1>

      <div className="flex gap-4 w-full max-w-2xl mt-16 ">
        {/* My Experience graph Container*/}
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-2.5  bg-[#E3D4BC]" />
          <div className="w-px h-71 bg-[#E3D4BC] " />
          <div className="w-2.5 h-2.5  bg-[#E3D4BC]" />
        </div>

        {/* 2026 Informtion */}
        <div className="flex flex-col justify-between gap-39">
          <div>
            <div className="text-[#FFFFFF] ">
              <h2 className="text-[12px] md:text-[32px]">2026</h2>
              <h2 className="text-[12px] md:text-[32px]">
                Graduated with a Bachelor’s Degree in CS
              </h2>
              <h3 className="text-[10px] md:text-[16px]">
                Arab Open University
              </h3>
            </div>
          </div>
          {/* 2025 Informtion */}
          <div className="flex gap-7">
            <div className="text-[#FFFFFF] ">
              <h2 className="text-[12px] md:text-[32px]">2025</h2>
              <h2 className="text-[12px] md:text-[32px]">
                Cooperative training
              </h2>
              <div className="flex md:gap-10">
                <h2 className="text-[12px] md:text-[20px]">Internship</h2>
                <h2 className="text-[12px] md:text-[20px]">Alinma Bank</h2>
              </div>
              <p className="text-[6px] flex flex-wrap max-w-[90%] text-[#8B817E] md:text-[12px] ">
                Completed a cooperative training program in the Platform &
                VMware Department, where I gained practical experience in
                enterprise IT infrastructure and virtualization technologies.
                Assisted in monitoring and supporting VMware environments,
                explored Linux-based systems, and gained insight into enterprise
                infrastructure operations. Worked alongside experienced
                engineers to understand system reliability, infrastructure
                management, and industry best practices while strengthening my
                technical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
