
import Icon from "./ui/Icon";

const Footer = () => {
  return (
    <div className=" w-full bg-footerblack font-main ">
      <div className="max-w-7xl mx-auto py-6 px-12 md:px-0 ">
        <div className="py-4  flex flex-col gap-8 md:flex-row justify-between md:items-center ">
          {/* LOGO */}
          <div>
            <Icon type='logo' />
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
          © 2025 Primetime Wellness. All rights reserved. · Ibadan, Oyo State,
          Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;
