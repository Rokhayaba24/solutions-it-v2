import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <Link href="/" className="text-lg font-extrabold text-white">Solutions <span className="text-blue-400">IT</span></Link>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Des solutions numériques utiles, évolutives et adaptées aux besoins des entreprises au Sénégal.</p>
                </div>
                <div>
                    <h2 className="font-bold text-white">Navigation</h2>
                    <div className="mt-3 flex flex-col items-start gap-2 text-sm">
                        <Link href="/services" className="hover:text-white">Nos services</Link>
                        <Link href="/portfolio" className="hover:text-white">Réalisations</Link>
                        <Link href="/a-propos" className="hover:text-white">À propos</Link>
                        <Link href="/contact" className="hover:text-white">Contact</Link>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-white">Contact</h2>
                    <p className="mt-3 text-sm">Dakar, Sénégal</p>
                    <p className="mt-1 text-sm">contact@solutions-it.sn <span className="text-slate-500">(à configurer)</span></p>
                </div>
            </div>
            <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Solutions IT. Tous droits réservés.</div>
        </footer>
    );
}
