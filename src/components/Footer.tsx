import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-200 text-gray-600 py-4 mt-auto fixed inset-x-0 bottom-0">
            <div className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between px-4">
                <Link href="/">
                    <Image className="h-10 w-auto" src={logo} alt="Property Pulse logo" />
                </Link>

                <ul className="flex gap-6 justify-between items-center">
                    <li>
                        <Link className="hover:text-gray-900" href="#">
                            Terms
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-900" href="#">
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-900" href="#">
                            About
                        </Link>
                    </li>
                </ul>

                <span>&copy; {currentYear} Copyright &minus; all rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
