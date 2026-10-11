<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'SunuMarket — Boutique en ligne',
                'description' => 'Exemple de plateforme e-commerce avec catalogue de produits, parcours de commande et expérience adaptée au mobile.',
                'client_sector' => 'Commerce',
                'technologies' => 'Laravel, React, Tailwind CSS',
                'kpi' => null,
                'image_path' => null,
                'project_url' => null,
            ],
            [
                'title' => 'Galsen Immo — Application immobilière',
                'description' => 'Concept d’application pour rechercher des biens, filtrer les annonces et contacter les annonceurs.',
                'client_sector' => 'Immobilier',
                'technologies' => 'React Native, TypeScript, Laravel',
                'kpi' => null,
                'image_path' => null,
                'project_url' => null,
            ],
            [
                'title' => 'Portail de prise de rendez-vous',
                'description' => 'Prototype de portail web facilitant la présentation des services et la demande de rendez-vous en ligne.',
                'client_sector' => 'Santé',
                'technologies' => 'React, Tailwind CSS, API REST',
                'kpi' => null,
                'image_path' => null,
                'project_url' => null,
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['title' => $project['title']], $project);
        }
    }
}
