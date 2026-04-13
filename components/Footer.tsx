import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full bg-footerblack font-main ">
      <div className="max-w-7xl mx-auto py-6 px-12 md:px-0 ">
        <div className="py-4  flex flex-col gap-8 md:flex-row justify-between md:items-center ">
          {/* LOGO */}
          <div>
            <Image
              width={73}
              height={68}
              className="0bject-fit"
              src={"/logo.png"}
              alt="logo"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="flex md:flex-row flex-col  gap-8 text-white font-light">
            <a href="#" className="hover:text-primary transition">
              About
            </a>
            <a href="#" className="hover:text-primary transition">
              Programs
            </a>
            <a href="#" className="hover:text-primary transition">
              Facilities
            </a>
            <a href="#" className="hover:text-primary transition">
              Membership
            </a>
            <a href="#" className="hover:text-primary transition">
              Instagram
            </a>
          </nav>
        </div>

        <p className="md:text-center text-left text-white font-light mt-3">
          © 2025 Primetime Wellness, Akobo Axis. All rights reserved. · Ibadan,
          Oyo State, Nigeria
        </p>
      </div>

      <div className="fixed right-6 bottom-6 md:right-28 md:bottom-28 animate-bounce z-100">
        <a href="">
          <Image
            width={50}
            height={50}
            className="object-fit w-14 h-14 md:w-20 md:h-20"
            src={"/img/whatsapp.png"}
            alt={"whatsapp logo"}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
