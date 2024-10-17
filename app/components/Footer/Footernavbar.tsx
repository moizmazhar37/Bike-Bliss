import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import bikeRed from "../../public/bikeRed.png";

const FooterNavbar = () => {
  return (
    <nav className="flex flex-col items-center py-4 space-y-4 md:space-y-0 md:flex-row md:justify-between -ml-9">
      <div className="flex items-center">
        <Image src={bikeRed} alt="Bike Bliss Logo" width={102} height={102} />
        <span className="text-[#ECEEEC] text-base font-medium">Bike Bliss</span>
      </div>
      <div className="flex space-x-6">
        {/* Change Links to anchor tags for smooth scrolling */}
        <a
          href="#main-features"
          className="text-[#ECEEEC] text-base font-medium"
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="text-[#ECEEEC] text-base font-medium"
        >
          Testimonials
        </a>
        <a href="#faqs" className="text-[#ECEEEC] text-base font-medium">
          FAQs
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebookF className="text-[#ECEEEC] text-2xl" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FaInstagram className="text-[#ECEEEC] text-2xl" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FaTwitter className="text-[#ECEEEC] text-2xl" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FaLinkedinIn className="text-[#ECEEEC] text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default FooterNavbar;
