"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import profile from "@/assets/images/profile.png";

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

const NavAuth = () => {
    const [isAuth, setIsAuth] = useState(true);

    if (!isAuth) {
        return (
            <div className="hidden md:block">
                <Link href="#">
                    <span className="bg-gray-800 text-white p-2 rounded">
                        Login or Register
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <Dropdown
            trigger={
                <Image
                    className="h-10 w-auto"
                    src={profile}
                    alt="Guest profile avatar"
                />
            }
        >
            <ul>
                {profileLinks.map((link, idx) => (
                    <li key={idx}  className="py-2">
                        <Link href={link.href}>
                            <span>{link.title}</span>
                        </Link>
                    </li>
                ))}
                <li>
                    <button className="py-2">Sign out</button>
                </li>
            </ul>
        </Dropdown>
    );
};

export default NavAuth;
