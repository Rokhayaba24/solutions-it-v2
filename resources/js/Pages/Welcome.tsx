import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

type Project = { id: number; title: string; description: string; client_sector: string; technologies: string; kpi?: string | null };
export default function Welcome({ projects = [] }: { projects?: Project[] }) {
    const strengths = [
        { number: '01', title: 'Solutions sur mesure', text: 'Des outils numériques adaptés à vos objectifs et à vos utilisateurs.' },
        { number: '02', title: 'Approche orientée qualité', text: 'Une attention portée à la sécurité, aux performances et à la maintenabilité.' },
        { number: '03', title: 'Accompagnement', text: 'Un échange clair à chaque étape, de la définition du besoin au support.' },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Head>
                <title>Solutions IT Dakar | Développement web, mobile et support informatique</title>
                <meta name="description" content="Solutions IT accompagne les entreprises au Sénégal en développement web et mobile, amélioration d'applications, maintenance et support informatique." />
                <meta name="robots" content="index, follow" />
            </Head>
            <Navbar />
            <main>
                <section className="relative overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" aria-hidden="true" />
                    <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200">Votre partenaire numérique au Sénégal</p>
                            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Transformons vos idées en <span className="text-blue-400">solutions digitales.</span></h1>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Nous concevons, améliorons et maintenons des sites web et applications utiles, accessibles et évolutifs pour accompagner votre activité.</p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact" className="rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-blue-950/30 hover:bg-blue-500">Parlons de votre projet <span aria-hidden="true">→</span></Link>
                                <Link href="/portfolio" className="rounded-xl border border-white/20 px-6 py-4 text-center font-bold text-white hover:bg-white/10">Voir nos réalisations</Link>
                            </div>
                            <p className="mt-5 text-sm text-slate-400">Web · Mobile · Modernisation · Support IT</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:p-7">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                                <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
                                <span className="ml-3 text-xs font-medium text-slate-400">solutions-it / aperçu</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-6">
                                <div className="rounded-2xl bg-blue-500/15 p-5"><p className="text-3xl">⌘</p><h2 className="mt-4 font-bold text-white">Développement</h2><p className="mt-2 text-sm text-slate-300">Des produits pensés pour vos besoins.</p></div>
                                <div className="rounded-2xl bg-violet-500/15 p-5"><p className="text-3xl">◇</p><h2 className="mt-4 font-bold text-white">Innovation</h2><p className="mt-2 text-sm text-slate-300">Des technologies choisies avec soin.</p></div>
                                <div className="col-span-2 rounded-2xl border border-white/10 bg-slate-900/70 p-5"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-white">Un projet en tête ?</span><span className="text-blue-300">● Disponible pour échanger</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" /></div><p className="mt-2 text-xs text-slate-400">Écoute · Conception · Réalisation · Accompagnement</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Nos expertises</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">La technologie au service de votre activité</h2><p className="mt-4 leading-7 text-slate-600">Du premier échange à la mise en service, nous privilégions des solutions simples à utiliser et faciles à faire évoluer.</p></div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ['01', 'Développement web', 'Sites vitrines, e-commerce, portails et applications SaaS.'],
                            ['02', 'Développement mobile', 'Applications iOS, Android et hybrides.'],
                            ['03', 'Amélioration applicative', 'Audit de code, performance, migration et nouvelles fonctionnalités.'],
                            ['04', 'Maintenance & support', 'Assistance utilisateur, hébergement, sécurité et sauvegardes.'],
                        ].map(([n, title, text]) => <article key={n} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><span className="text-sm font-black text-blue-700">{n} /</span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><Link href="/services" className="mt-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-900">En savoir plus →</Link></article>)}
                    </div>
                </section>
                <section className="bg-slate-50">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Notre différence</p><h2 className="mt-3 text-3xl font-black">Un partenaire, pas seulement un prestataire.</h2></div><Link href="/a-propos" className="font-bold text-blue-700 hover:text-blue-900">Découvrir notre approche →</Link></div>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">{strengths.map((item) => <article key={item.number} className="rounded-2xl bg-white p-6 shadow-sm"><span className="text-sm font-bold text-blue-700">{item.number}</span><h3 className="mt-4 text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Portfolio</p><h2 className="mt-3 text-3xl font-black">Des idées concrétisées</h2><p className="mt-3 text-slate-600">Quelques exemples de concepts et de réalisations présentés dans notre portfolio.</p></div><Link href="/portfolio" className="font-bold text-blue-700 hover:text-blue-900">Tout le portfolio →</Link></div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {projects.slice(0, 3).map((project) => <article key={project.id} className="rounded-2xl border border-slate-200 p-6"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{project.client_sector}</span><h3 className="mt-4 text-lg font-extrabold">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p><p className="mt-4 text-xs font-semibold text-slate-500">{project.technologies}</p></article>)}
                        {projects.length === 0 && <p className="text-slate-600">Les réalisations seront publiées ici prochainement.</p>}
                    </div>
                </section>
                <section className="px-4 pb-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl bg-blue-700 px-6 py-10 text-center sm:px-12 sm:py-14"><h2 className="text-3xl font-black text-white">Prêt à donner vie à votre projet ?</h2><p className="mx-auto mt-4 max-w-2xl text-blue-100">Parlons de vos objectifs et trouvons ensemble la solution la plus adaptée.</p><Link href="/contact" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-blue-800 hover:bg-blue-50">Nous contacter</Link></div></section>
            </main>
            <Footer />
        </div>
    );
}
