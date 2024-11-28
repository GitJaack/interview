import Link from "next/link";
import React from "react";

const Nav = () => {
    const links = [
        {
            href: "/",
            label: "Accueil",
        },
        {
            href: "/particuliers",
            label: "Particuliers",
        },
        {
            href: "/professionnels",
            label: "Professionnels",
        },
        {
            href: "/avis-client",
            label: "Avis client",
        },
        {
            href: "/nos-realisations",
            label: "Nos réalisations",
        },
        {
            href: "/contactez-nous",
            label: "Contactez-nous",
        },
    ];

    return (
        <nav className="flex justify-center items-center bg-black p-10 fixed z-50 w-full top-10">
            <div className="flex items-center gap-0.5 mr-16">
                <img
                    className="w-10 h-10 rounded-full "
                    src="logo.jpeg"
                    alt="logo"
                />
                <h1 className="text-xl font-bold text-white h-full">
                    Internet
                </h1>
            </div>
            <div className="flex gap-10 text-white">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                    >
                        {link.label}{" "}
                    </Link>
                ))}
            </div>
            <div className="ml-16 bg-red-primary py-2 px-6">
                <Link
                    className="text-white"
                    href="/devis"
                >
                    Devis en ligne
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
