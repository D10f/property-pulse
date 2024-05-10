"use client";

import React, { useState, useEffect, useRef } from "react";

type DropdownProps = {
    children: React.ReactNode;
    trigger: React.ReactNode;
};

const Dropdown = ({ children, trigger }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((previous) => !previous);

    const menu = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!menu.current) return;

        const { x, width } = menu.current.getBoundingClientRect();

        if (x + width > window.innerWidth) {
            menu.current.style.left = `${window.innerWidth - (x + width) - 20}px`;
        }
    }, [isOpen]);

    return (
        <div className="relative">
            <button onClick={toggle}>{trigger}</button>
            {isOpen && (
                <aside
                    ref={menu}
                    className="absolute p-2 w-max flex flex-col justify-left items-start bg-white text-gray-900 shadow-xl rounded"
                >
                    {children}
                </aside>
            )}
        </div>
    );
};

export default Dropdown;
