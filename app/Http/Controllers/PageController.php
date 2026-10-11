<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Welcome', [
            'projects' => Project::query()->latest()->take(3)->get(),
        ]);
    }

    public function services(): Response
    {
        return Inertia::render('Services');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function portfolio(): Response
    {
        return Inertia::render('Portfolio', [
            'projects' => Project::query()->latest()->get(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact', [
            'contactEmail' => config('mail.contact_address', env('CONTACT_EMAIL', 'contact@solutions-it.sn')),
            'contactPhone' => env('CONTACT_PHONE', '+221 77 000 00 00'),
            'contactAddress' => env('CONTACT_ADDRESS', 'Dakar, Sénégal'),
        ]);
    }

    public function handleContact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc', 'max:255'],
            'subject' => ['required', 'string', 'max:160'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],
        ]);

        $recipient = env('CONTACT_EMAIL', 'contact@solutions-it.sn');

        // En mode local avec MAIL_MAILER=log, le message est écrit dans storage/logs/laravel.log.
        Mail::to($recipient)->send(new ContactMessageMail($validated));

        return back()->with('success', 'Merci ! Votre message a été envoyé. Nous vous répondrons dès que possible.');
    }
}
