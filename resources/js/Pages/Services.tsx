import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const services = [
    { number: '01', title: 'Développement web', intro: 'Des expériences web adaptées à votre activité et à vos clients.', items: ['Sites vitrines et e-commerce', 'Portails web personnalisés', 'Applications web et SaaS', 'Refonte de sites existants'], process: 'Analyse du besoin, conception des écrans, développement, tests et mise en ligne.', tech: 'Laravel, React, TypeScript, HTML, CSS, API REST' },
    { number: '02', title: 'Développement mobile', intro: 'Des applications pratiques pour rapprocher vos services de vos utilisateurs.', items: ['Applications iOS', 'Applications Android', 'Applications hybrides', 'Interfaces pensées pour le mobile'], process: 'Cadrage fonctionnel, prototypage, développement, tests sur appareils et préparation à la publication.', tech: 'React Native, TypeScript, API REST' },
    { number: '03', title: 'Amélioration d’applications', intro: 'Faites évoluer vos outils existants sans repartir systématiquement de zéro.', items: ['Audit de code', 'Optimisation des performances', 'Migration technologique', 'Ajout de fonctionnalités'], process: 'Diagnostic, priorisation des risques, plan d’amélioration, validation et documentation.', tech: 'Selon votre environnement : Java, PHP, JavaScript, SQL et outils de tests' },
    { number: '04', title: 'Maintenance et support IT', intro: 'Gardez vos services disponibles, sécurisés et faciles à maintenir.', items: ['Support utilisateur', 'Hébergement web', 'Sécurité informatique', 'Sauvegardes et restauration'], process: 'État des lieux, plan de maintenance, suivi des incidents et vérification des sauvegardes.', tech: 'Linux, outils de supervision, HTTPS/TLS, solutions de sauvegarde' },
];

export default function Services() {
    return <div className="min-h-screen bg-white text-slate-900">
        <Head><title>Services IT | Solutions IT Dakar</title><meta name="description" content="Découvrez nos services de développement web et mobile, modernisation applicative, maintenance et support informatique au Sénégal." /></Head>
        <Navbar />
        <main>
            <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-300">Ce que nous faisons</p><h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">Des services IT pensés pour vos enjeux.</h1><p className="mt-5 max-w-2xl leading-7 text-slate-300">Du développement d’un nouveau produit à la maintenance de vos outils, nous vous accompagnons avec une approche claire et pragmatique.</p></div></section>
            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2">{services.map((service) => <article key={service.number} className="rounded-3xl border border-slate-200 p-7 sm:p-9"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-black text-blue-700">SERVICE {service.number}</p><h2 className="mt-3 text-2xl font-black">{service.title}</h2></div><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl font-black text-blue-700">{service.number}</span></div><p className="mt-4 leading-7 text-slate-600">{service.intro}</p><h3 className="mt-6 font-bold">Ce que nous proposons</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{service.items.map((item) => <li key={item} className="flex gap-2 text-sm text-slate-600"><span className="font-bold text-blue-700">✓</span>{item}</li>)}</ul><h3 className="mt-6 font-bold">Notre approche</h3><p className="mt-2 text-sm leading-6 text-slate-600">{service.process}</p><p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm"><span className="font-bold">Technologies :</span> <span className="text-slate-600">{service.tech}</span></p></article>)}</div></section>
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><div className="rounded-3xl bg-blue-700 p-8 text-white sm:p-12"><h2 className="text-3xl font-black">Vous ne savez pas quel service choisir ?</h2><p className="mt-3 max-w-2xl text-blue-100">Expliquez-nous votre besoin : nous vous aiderons à identifier une solution réaliste et adaptée à vos priorités.</p><Link href="/contact" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50">Décrire mon projet →</Link></div></section>
        </main><Footer />
    </div>;
}
