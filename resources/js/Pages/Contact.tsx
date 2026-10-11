import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

type ContactProps = { contactEmail?: string; contactPhone?: string; contactAddress?: string };
export default function Contact() {
    const { props } = usePage<ContactProps & { flash?: { success?: string } }>();
    const { data, setData, post, processing, errors, reset } = useForm({ name: '', email: '', subject: '', message: '' });
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post('/contact', { onSuccess: () => reset() });
    };

    return <div className="min-h-screen bg-slate-50 text-slate-900">
        <Head><title>Contact et devis | Solutions IT Dakar</title><meta name="description" content="Contactez Solutions IT pour discuter de votre projet de développement web, mobile ou de support informatique au Sénégal." /></Head>
        <Navbar />
        <main>
            <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-300">Contact</p><h1 className="mt-4 text-4xl font-black sm:text-5xl">Parlons de votre projet.</h1><p className="mt-4 max-w-2xl leading-7 text-slate-300">Décrivez-nous votre besoin. Les informations ci-dessous peuvent être ajustées avant la mise en ligne officielle.</p></div></section>
            <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-9">
                    <h2 className="text-2xl font-black">Envoyer un message</h2><p className="mt-2 text-sm text-slate-600">Les champs marqués * sont obligatoires.</p>
                    {props.flash?.success && <div role="status" className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">{props.flash.success}</div>}
                    <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
                        <div><label htmlFor="name" className="mb-2 block text-sm font-bold">Nom complet ou entreprise *</label><input id="name" name="name" autoComplete="name" required maxLength={120} value={data.name} onChange={(e) => setData('name', e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Votre nom" />{errors.name && <p id="name-error" className="mt-1 text-sm text-red-700">{errors.name}</p>}</div>
                        <div><label htmlFor="email" className="mb-2 block text-sm font-bold">Adresse e-mail *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={255} value={data.email} onChange={(e) => setData('email', e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="vous@exemple.com" />{errors.email && <p id="email-error" className="mt-1 text-sm text-red-700">{errors.email}</p>}</div>
                        <div><label htmlFor="subject" className="mb-2 block text-sm font-bold">Objet de la demande *</label><input id="subject" name="subject" required maxLength={160} value={data.subject} onChange={(e) => setData('subject', e.target.value)} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Ex. : Création d'un site web" />{errors.subject && <p id="subject-error" className="mt-1 text-sm text-red-700">{errors.subject}</p>}</div>
                        <div><label htmlFor="message" className="mb-2 block text-sm font-bold">Votre message *</label><textarea id="message" name="message" rows={6} required minLength={10} maxLength={5000} value={data.message} onChange={(e) => setData('message', e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Décrivez votre besoin, vos objectifs et votre délai..." />{errors.message && <p id="message-error" className="mt-1 text-sm text-red-700">{errors.message}</p>}<p className="mt-1 text-right text-xs text-slate-500">{data.message.length}/5000</p></div>
                        <button type="submit" disabled={processing} className="w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">{processing ? 'Envoi en cours…' : 'Envoyer le message →'}</button>
                        <p className="text-xs leading-5 text-slate-500">En envoyant ce formulaire, vous acceptez que les informations soient utilisées uniquement pour répondre à votre demande. Configurez une politique de confidentialité avant la mise en production.</p>
                    </form>
                </div>
                <aside className="space-y-5">
                    <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><h2 className="text-xl font-black">Nos coordonnées</h2><div className="mt-6 space-y-5"><div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">E-mail</p><p className="mt-1 break-words font-semibold">{props.contactEmail || 'contact@solutions-it.sn'}</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">Téléphone</p><p className="mt-1 font-semibold">{props.contactPhone || '+221 77 000 00 00'}</p><p className="mt-1 text-xs text-slate-500">Numéro à remplacer par le numéro professionnel réel.</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">Adresse</p><p className="mt-1 font-semibold">{props.contactAddress || 'Dakar, Sénégal'}</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-blue-700">Horaires</p><p className="mt-1 text-sm leading-6 text-slate-600">À compléter selon les horaires officiels de l’entreprise.</p></div></div></div>
                    <div className="rounded-3xl bg-blue-700 p-7 text-white"><h2 className="text-xl font-black">Besoin d’un accompagnement ?</h2><p className="mt-3 text-sm leading-6 text-blue-100">Présentez votre contexte et vos priorités. Nous pourrons préciser ensemble le périmètre du projet.</p><Link href="/services" className="mt-5 inline-flex font-bold hover:text-blue-100">Consulter nos services →</Link></div>
                </aside>
            </section>
        </main><Footer />
    </div>;
}
