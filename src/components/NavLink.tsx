"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
    text: string;
    href: string;
    className?: string;
};

const NavLink = ({ text, href, className }: NavLinkProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    const staticStyles = "text-current p-2 rounded md:text-white ";
    const dynamicStyles = isActive ? "bg-black !text-white" : "";

    return (
        <Link className={className} href={href}>
            <span className={staticStyles + dynamicStyles}>{text}</span>
        </Link>
    );
};

export default NavLink;
