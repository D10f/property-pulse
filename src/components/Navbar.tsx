import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import logo from "@/assets/images/logo-white.png";
import profile from "@/assets/images/profile.png";

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

const profileLinks = [
    {
        title: "Your Profile",
        href: "/profile",
    },
    {
        title: "Saved Properties",
        href: "/properties/saved",
    },
];

const Navbar = () => {
    return (
        <nav className="bg-blue-500 flex justify-between items-center p-5">
            <div className="md:hidden">
                <Dropdown trigger={<span>Click me!</span>}>
                    {links.map((link, idx) => (
                        <Link href={link.href} key={idx} className="py-2">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </Dropdown>
            </div>

            <div className="flex gap-4 items-center">
                <Link href="/" className="flex gap-2 items-center">
                    <Image className="h-10 w-auto" src={logo} alt="Property Pulse logo" />
                    <h1 className="font-bold text-white text-2xl hidden md:block">
                        Property Pulse
                    </h1>
                </Link>

                {links.map((link, idx) => (
                    <Link href={link.href} key={idx}>
                        <span className="text-white hover:bg-black p-2 rounded hidden md:block">
                            {link.title}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="flex gap-4 items-center">
                <Dropdown
                    trigger={
                        <Image
                            className="h-10 w-auto"
                            src={profile}
                            alt="Guest profile avatar"
                        />
                    }
                >
                    {profileLinks.map((link, idx) => (
                        <>
                            <Link href={link.href} key={idx} className="py-2">
                                <span>{link.title}</span>
                            </Link>
                            <button className="py-2">Sign out</button>
                        </>
                    ))}
                </Dropdown>
            </div>
        </nav>
    );
};

export default Navbar;
