import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-200 py-4 mt-auto">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Image className="h-8 w-auto" src={logo} alt="Property Pulse logo" />
                <span className="text-gray-600">
                    &copy; {currentYear} Copyright &minus; all rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
