export default function Footer() {
  return (
    <section className="flex flex-col gap-5 justify-center min-h-fit p-5 w-full bg-[#0F0D0C] lg:border-t-1 lg:border-white 2xl:flex-row 2xl:justify-between 2xl:p-20">
      <div>
        <h1 className="font-bold text-white text-[16px] md:text-3xl">
          Fahad Binfares
        </h1>
        <h1 className="font-extralight text-white text-[16px] md:text-2xl">
          © 2026 — Riyadh, SaudiArabia{" "}
        </h1>
      </div>
      <div className="flex gap-4 ">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/FahadBinfares"
            target="_blank"
            className="font-extralight text-white text-[16px] md:text-2xl"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fahad-alfares-112520259/"
            target="_blank"
            className="font-light text-white text-[16px] md:text-2xl"
          >
            Linkedin
          </a>

          <a
            href="mailto:fahadalfars100@email.com"
            target="_blank"
            className="font-light text-white text-[16px] md:text-2xl"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
