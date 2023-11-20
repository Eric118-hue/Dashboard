
## Development server
* Run `npm install`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Fonctionnalités
* Simulation de la réccupération des informations utilisateurs depuis un token (token.service.ts)
* Navigation sidebar: simulation de l'accès au menu "Configuration" uniquement par l'administrateur et protection de la route /configuration
* Lazy loading de tous les composants
* Composant widget générique pour le conteneur des widgets du dashboard (components/widget)
* Réccupération des données du dashboard via des requêtes http
* Possibilité de télécharger chaque données du dashboard au format .csv
* Configuration de l'url API dans environments/
* Intercetpeurs http: simulation injection d'un token jwt dans le header
* Utilisation de chart.js pour la génération des graphes
* Light/dark mode

