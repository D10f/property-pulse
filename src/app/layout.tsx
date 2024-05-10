import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";

/**
 * Apply once on the top-level layout and it will cascade to all child
 * pages. Export this object in child pages to overwrite any meta tags
 * at the individual level.
 */
export const metadata = {
    title: "Property Pulse",
    description: "Find the property of your dreams.",
    keywords: "rentals, find rental, property, properties",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default MainLayout;