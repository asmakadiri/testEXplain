# testEXplain


## Objectif de test ###

reproduire une une version simplifiée de logiciel "goodWell" en se basant sur les filtres géographiques.

## Comment lancer le code 

pour lancer la partie serveur :  
        
        Installer NodeJS version LTS : https://nodejs.org/en/download/
        Exécuter la commande "npm install" puis "npm start" dans le dossier "./serveur" 

pour lancer la partie client :

        Exécuter la commande "npm install" puis "npm run serve" dans le dossier "./client/src"

## Architecture de code ###
Le code est basé sur une architecture client-serveur : 

     la partie client :
        code source de la partie client : ./client
        langage utilisé : javascript et vuejs

    la partie serveur :
        code source de la partie serveur : ./server
        langage utilisé : nodejs et Express


### Partie front-end  :


L'interface est divisé en trois partie : le header, les filres et le resultas de la selection.

Ces trois composantes sont implémentées dans le dossier  "./client/src/components" de telle façon à les rendre générique et facilement réutilisable pour d'autres projets
et rassemblées dans le fichier "./client/src/views/UIExplaine.vue"

### Partie Back-end :

le serveur "./server/server.js" sert à traiter les données, ajouter à chaque item ses children pour 
respecter la hiérarchie des territoires et finalement filter les données.

## Problèmes trouvés

*** Le premier problème que j'ai trouvé est la taille des fichiers territories.csv et territory-parent.csv après avoir les transformer 
en format json afin de faciliter le traitement de données. La taille des fichiers json était très grande et le serveur crash à chaque fois 
que je lance le programme.
La solution que j'ai trouvé est de travailler avec une partie de donnés et ne pas la totalité pour reprendre l'éxécution normale du code.

*** Le deuxième problème est de trouver un algorithme optimale pour construire les données sous la forme d'une
hiérarchie et au même temps garantir la possibilité de changer facilement la hiérarchie et ajouter des données
sans changer le code.

## les améliorations envisagées

Quand l'utilisateur ouvre l'interface, il sera mieux d'afficher une liste de toutes les communes au lieu d'afficher
que les six départements qui existent au debut










