import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import NavLink from "@/components/NavLink";
import NavAuth from "@/components/NavAuth";
import logo from "@/assets/images/logo-white.png";

const links = [
    {
        title: "Properties",
        href: "/properties",
    },
    {
        title: "Add Property",
        href: "/properties/add",
    },
];

const Navbar = () => {
    return (
        <nav className="bg-blue-500 flex justify-between items-center p-5">
            <div className="md:hidden">
                <Dropdown trigger={<span>Click me!</span>}>
                    {links.map((link, idx) => (
                        <NavLink
                            className="py-2"
                            text={link.title}
                            href={link.href}
                            key={idx}
                        />
                    ))}

                    <Link href="#" className="py-2">
                        <span className="bg-gray-800 text-white p-2 rounded">
                            Login or Register
                        </span>
                    </Link>
                </Dropdown>
            </div>

            <div className="flex gap-4 items-center">
                <Link href="/" className="flex gap-2 items-center">
                    <Image className="h-10 w-auto" src={logo} alt="Property Pulse logo" />
                    <h1 className="font-bold text-white text-2xl">Property Pulse</h1>
                </Link>

                {links.map((link, idx) => (
                    <NavLink
                        className="hidden md:block"
                        text={link.title}
                        href={link.href}
                        key={idx}
                    />
                ))}
            </div>

            <NavAuth />
        </nav>
    );
};

export default Navbar;
