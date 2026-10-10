export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-around min-h-211  w-full bg-[#0F0D0C] p-14 max-sm:p-4"
    >
      {/* seection info*/}
      <div className="flex items-center gap-5">
        <div className=" h-30  w-0.5 bg-[#8A8175] max-sm:hidden " />
        <span className=" font-bold text-(--main-color)">05 Contact</span>
      </div>

      <div className="p-[10%] flex flex-col gap-20">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-3xl md:text-6xl leading-tight text-[#A8A39A] font-bold text-center flex justify-start max-sm:text-[1.5rem]">
            Get in Touch
          </h1>
          <p className="font-light text-[10px] text-white lg:text-2xl md:text-xl 2xl:w-[90%] max-sm:text-[8px]">
            Have a question, an idea, or a project in mind? I’d love to hear
            from you. Feel free to reach out, and I’ll get back to you as soon
            as possible. Whether you’re interested in working together or simply
            want to connect, your message is always welcome.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row lg:w-80">
          <a
            href="mailto:fahadalfars100@email.com"
            target="_blank"
            className="h-11.25 w-full flex items-center justify-center text-black font bg-(--main-color) rounded-xl"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/fahad-alfares-112520259/"
            target="_blank"
            className="h-11.25 w-full flex items-center justify-center text-white bg-[#5D5755] rounded-xl"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/FahadBinfares"
            target="_blank"
            className="h-11.25 flex items-center justify-center w-full text-white bg-[#5D5755] rounded-xl lg:hidden"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
