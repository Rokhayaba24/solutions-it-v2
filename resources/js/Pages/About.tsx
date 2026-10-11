import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function About() {
    return <div className="min-h-screen bg-white text-slate-900">
        <Head><title>À propos | Solutions IT Dakar</title><meta name="description" content="Découvrez la mission, les valeurs et l'approche de Solutions IT, entreprise de services numériques à Dakar." /></Head>
        <Navbar />
        <main>
            <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-300">À propos de nous</p><h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">La technologie doit résoudre des problèmes réels.</h1><p className="mt-5 max-w-2xl leading-7 text-slate-300">Solutions IT est un projet d’entreprise de services numériques basé à Dakar, au Sénégal. Nous aidons les organisations à concevoir, améliorer et maintenir leurs outils digitaux.</p></div></section>
            <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
                <div><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Notre mission</p><h2 className="mt-3 text-3xl font-black">Rendre le numérique utile et accessible.</h2><p className="mt-5 leading-7 text-slate-600">Nous cherchons à transformer les besoins métier en solutions compréhensibles, fiables et évolutives. Chaque projet commence par l’écoute, se construit par étapes et vise à créer une valeur concrète pour ses utilisateurs.</p></div>
                <div className="rounded-3xl bg-slate-50 p-7"><h2 className="text-xl font-black">Nos valeurs</h2><div className="mt-5 space-y-5">{[['Clarté', 'Des échanges transparents et des objectifs définis.'], ['Qualité', 'Des solutions testées, documentées et maintenables.'], ['Collaboration', 'Des décisions prises avec le client et ses utilisateurs.'], ['Amélioration continue', 'Une attention portée à la sécurité, aux performances et aux retours.']].map(([title, text]) => <div key={title}><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>)}</div></div>
            </section>
            <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="text-3xl font-black">Notre méthode de travail</h2><div className="mt-8 grid gap-5 md:grid-cols-4">{[['01', 'Écouter', 'Comprendre le contexte, les utilisateurs et les objectifs.'], ['02', 'Concevoir', 'Proposer une solution et un périmètre clairs.'], ['03', 'Réaliser', 'Développer, tester et partager les avancées.'], ['04', 'Accompagner', 'Préparer la mise en service et les améliorations.']].map(([n, title, text]) => <article key={n} className="rounded-2xl bg-white p-6"><p className="text-sm font-black text-blue-700">{n}</p><h3 className="mt-3 text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div><p className="mt-8 text-sm text-slate-500">Note : les informations relatives à l’historique détaillé, à l’équipe, aux certifications et aux chiffres clés devront être ajoutées après validation par l’entreprise.</p></div></section>
            <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-black">Construisons la suite ensemble.</h2><Link href="/contact" className="mt-6 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">Contactez-nous</Link></section>
        </main><Footer />
    </div>;
}
