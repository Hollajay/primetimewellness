import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full bg-footerblack ">
      <div className="max-w-7xl mx-auto py-6 ">
        <div className="py-4 flex justify-between items-center ">
          {/* LOGO */}
          <div>
            <Image
              className="object-fit"
              width={73}
              height={67}
              src={"/logo.png"}
              alt="primetime logo"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex  gap-8 text-white font-medium">
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

        <p className="text-center text-white mt-3">
          © 2025 Primetime Wellness. All rights reserved. · Ibadan, Oyo State,
          Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;
