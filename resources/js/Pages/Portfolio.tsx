import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

interface Project {
    id: number;
    title: string;
    description: string;
    client_sector: string;
    technologies: string;
    kpi: string | null;
    image_path: string | null;
    project_url: string | null;
}
export default function Portfolio({ projects = [] }: { projects?: Project[] }) {
    return <div className="min-h-screen bg-white text-slate-900">
        <Head><title>Portfolio | Solutions IT Dakar</title><meta name="description" content="Consultez des exemples de projets web et mobile, leurs secteurs et les technologies utilisées par Solutions IT." /></Head>
        <Navbar />
        <main>
            <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-300">Nos réalisations</p><h1 className="mt-4 text-4xl font-black sm:text-5xl">Des idées transformées en expériences digitales.</h1><p className="mt-5 max-w-2xl leading-7 text-slate-300">Découvrez une sélection de concepts de projets. Les références et résultats réels seront publiés après validation des informations par l’entreprise.</p></div></section>
            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <article key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${index % 3 === 0 ? 'from-blue-800 to-cyan-500' : index % 3 === 1 ? 'from-violet-800 to-indigo-500' : 'from-slate-800 to-slate-500'} p-6`}><div className="w-full rounded-xl border border-white/30 bg-white/10 p-5 text-white backdrop-blur"><p className="text-xs uppercase tracking-widest opacity-80">Solutions IT / Projet</p><p className="mt-3 text-xl font-black">{project.title}</p><div className="mt-4 h-1.5 w-2/3 rounded-full bg-white/70" /></div></div>
                <div className="p-6"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{project.client_sector}</span><h2 className="mt-4 text-xl font-extrabold">{project.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p><div className="mt-5 border-t border-slate-100 pt-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Technologies</p><p className="mt-1 text-sm font-semibold text-slate-800">{project.technologies}</p></div>{project.kpi && <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-800">Résultat : {project.kpi}</p>}{project.project_url && <a href={project.project_url} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-bold text-blue-700 hover:text-blue-900">Voir le projet ↗</a>}</div>
            </article>)}</div>{projects.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center"><h2 className="text-xl font-bold">Le portfolio arrive bientôt</h2><p className="mt-2 text-slate-600">Les projets seront ajoutés après validation des visuels et des références.</p></div>}<p className="mt-8 text-sm leading-6 text-slate-500">Les éléments de démonstration ne doivent pas être présentés comme des références clients vérifiées. Remplacez-les par les projets réels avant la mise en production.</p></section>
            <section className="bg-slate-50 px-4 py-12 text-center"><h2 className="text-2xl font-black">Vous avez un projet similaire ?</h2><Link href="/contact" className="mt-5 inline-flex rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800">Parlons-en</Link></section>
        </main><Footer />
    </div>;
}
