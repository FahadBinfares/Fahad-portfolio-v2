export default function Project() {
  return (
    <section
      className="relative min-h-[844px] w-full bg-[#0F0D0C] flex flex-col justify-center items-center
    ' gap-40 px-4"
    >
      <div className="absolute top-0 left-[60px] h-[120px] w-[2px] bg-[#8A8175] max-sm:hidden mt-18" />
      {/*Project section*/}
      <span className="absolute top-[120px] left-[90px] font-bold text-[#FF6310] max-sm:left-[20px]">
        03 PROJECT
      </span>
      <h1 className="text-[30px] text-[#A8A39A] font-bold flex justify-center md:text-6xl mt-60 ">
        Selected work
      </h1>
      {/*First app continer */}
      <div className="flex flex-col gap-15  ">
        {/*App img*/}
        <div className="bg-[#292625] rounded-4xl h-[213px] w-full   overflow-hidden mx-auto ">
          <img
            className="w-full h-full object-cover object-top "
            src="src\assets\Adikr-app.png"
            alt=""
          />
        </div>
        {/*  first app info continer  */}
        <div className="flex flex-col gap-7 p-3 md:p-0  md:items-center">
          {/*App name*/}
          <h2 className="text-white text-[20px] font-bold flex gap-5  md:text-[30px]">
            <span className="text-[#FF6310]">01</span> Adkar
          </h2>
          {/*App idea*/}
          <p className="text-[#5D5755] text-[14px] md:text-[20px] ">
            A daily dhikr companion — offline-first counter, streak history and
            a quietreading mode.
          </p>
          {/*First app tools*/}
          <div className="space-x-4">
            <span className="bg-[#5D5755] p-3 text-white rounded-2xl">
              React
            </span>
            <span className="bg-[#5D5755] p-3 text-white rounded-2xl">CSS</span>
          </div>
        </div>
        <div className="flex justify-between items-end ">
          <a href="/" className="text-[#8B817E]">
            View Project →
          </a>
          <a href="/" className="text-[#8B817E]">
            GitHub →
          </a>
        </div>
        <div className="h-[1px] w-[100%] bg-[#8A8175] mt-[-50px]  " />
      </div>
      {/*I need here line to Separating project ✅*/}

      {/*Second app continer */}
      <div className="flex flex-col gap-10 mb-8   ">
        {/*App img*/}
        <div className=" text-white text-7xl flex items-center justify-center  rounded-4xl h-[213px] min-w-[100px] w-full overflow-hidden mx-auto">
          ?
        </div>

        {/*App name*/}
        <div className="flex flex-col gap-7 p-3 md:p-0  md:items-center">
          <h2 className="text-white text-[20px] font-bold flex gap-5 md:text-[30px] ">
            <span className="text-[#FF6310]">02</span> Pending
          </h2>
          {/*App idea*/}
          <p className="text-[#5D5755] text-[14px]">In the kitchen</p>
          {/*First app tools*/}
          <div className="space-x-4">
            <span className="bg-[#5D5755] p-3 text-white rounded-2xl">🤔</span>
            <span className="bg-[#5D5755] p-3 text-white rounded-2xl">🤔</span>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-[#8A8175] mt-[-50px]  " />
    </section>
  );
}
