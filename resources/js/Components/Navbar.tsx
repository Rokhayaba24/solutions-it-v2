import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const links = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Réalisations' },
    { href: '/a-propos', label: 'À propos' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    const navLink = (href: string, label: string) => (
        <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            aria-current={url === href ? 'page' : undefined}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                url === href ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
            }`}
        >
            {label}
        </Link>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
                <Link href="/" className="flex items-center gap-2" aria-label="Solutions IT, accueil">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-xl font-black text-white">S</span>
                    <span className="text-lg font-extrabold tracking-tight text-slate-900">Solutions <span className="text-blue-700">IT</span></span>
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                    {links.map((link) => navLink(link.href, link.label))}
                    <Link href="/contact" className="ml-3 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Demander un devis
                    </Link>
                </div>
                <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden">
                    {open ? 'Fermer' : 'Menu'}
                </button>
            </nav>
            {open && (
                <div id="mobile-navigation" className="border-t border-slate-100 px-4 pb-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {links.map((link) => navLink(link.href, link.label))}
                        <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white">Demander un devis</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
