# Solutions IT — Site vitrine

Site vitrine Laravel + Inertia.js + React + TypeScript + Tailwind CSS pour une entreprise de solutions informatiques basée à Dakar.

## Pages livrées
- Accueil avec proposition de valeur, services, points forts et projets récents
- Services : développement web, mobile, amélioration applicative, maintenance et support
- Portfolio connecté à la base de données
- À propos : mission, valeurs et méthode de travail
- Contact avec validation Laravel et envoi d'e-mail configurable

## Prérequis
- PHP 8.3 ou supérieur et Composer
- Node.js/npm
- SQLite (ou un autre moteur Laravel configuré)

## Installation sous Windows (PowerShell)
Dans le dossier `solutions-it` :

```powershell
composer install
Copy-Item .env.example .env
php artisan key:generate
New-Item -ItemType File -Force database/database.sqlite
php artisan migrate --seed
npm install
npm run build
php artisan serve
```

Ouvrir `http://127.0.0.1:8000`.

Pour travailler en mode développement avec rechargement automatique, ouvrir deux terminaux :
- Terminal 1 : `php artisan serve`
- Terminal 2 : `npm run dev`

## Formulaire de contact
Par défaut, `MAIL_MAILER=log` évite de prétendre qu'un e-mail a été transmis à une vraie boîte : le message est écrit dans `storage/logs/laravel.log`. Pour envoyer de vrais e-mails, configurez un serveur SMTP dans `.env` (MAIL_MAILER=smtp, MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_FROM_ADDRESS) et définissez `CONTACT_EMAIL` avec l'adresse réelle de réception.

Après modification du `.env` :
```powershell
php artisan config:clear
```

## Données de démonstration
`php artisan migrate --seed` ajoute trois projets de démonstration. Les noms, textes et technologies servent d'exemples ; aucun KPI ou lien client inventé n'est affiché. Remplacez-les par les références réelles et leurs captures d'écran avant publication.

## Avant la mise en production
1. Définir le domaine et l'hébergement.
2. Remplacer l'adresse e-mail, le téléphone et les horaires par les coordonnées officielles.
3. Fournir le logo et les captures d'écran réelles des projets.
4. Configurer SMTP et tester la réception réelle des messages.
5. Déployer sous HTTPS, définir `APP_ENV=production`, `APP_DEBUG=false`, générer une clé sécurisée et appliquer les mises à jour.
6. Ajouter les mentions légales et la politique de confidentialité.
7. Configurer Google Search Console et Google Analytics 4 si le consentement et la politique de confidentialité le permettent.
8. Tester mobile/tablette/ordinateur, navigateurs, accessibilité, liens et performance.

## Notes
- Le domaine `solutions-it.sn`, le numéro et l'e-mail sont des valeurs provisoires à confirmer.
- Les objectifs de chargement inférieur à 3 secondes, de positionnement Google et de conversion sont à mesurer après le déploiement ; ils ne peuvent pas être garantis par le seul code source.
