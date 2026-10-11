<?php

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('affiche les pages principales', function (string $path) {
    $this->get($path)->assertOk();
})->with([
    '/',
    '/services',
    '/portfolio',
    '/a-propos',
    '/contact',
]);

it('affiche les projets dans le portfolio', function () {
    Project::create([
        'title' => 'Projet de test',
        'description' => 'Description de test suffisamment longue.',
        'client_sector' => 'Éducation',
        'technologies' => 'Laravel, React',
        'kpi' => null,
        'image_path' => null,
        'project_url' => null,
    ]);

    $this->get('/portfolio')->assertOk()->assertSee('Projet de test');
});

it('valide les champs du formulaire de contact', function () {
    $this->from('/contact')->post('/contact', [
        'name' => '',
        'email' => 'email-invalide',
        'subject' => '',
        'message' => 'court',
    ])->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
});
