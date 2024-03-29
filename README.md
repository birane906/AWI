# Projet AWI <img src="http://festival-du-jeux.herokuapp.com/favicon.ico" width="50">
```
  ___       _   _          _      _           _          
 | __|__ __| |_(_)_ ____ _| |  __| |_  _   _ | |___ _  _ 
 | _/ -_|_-<  _| \ V / _` | | / _` | || | | || / -_) || |
 |_|\___/__/\__|_|\_/\__,_|_| \__,_|\_,_|  \__/\___|\_,_|
                                                          
```

## Cadre
Le projet a été réalisé dans le cadre de la formation IG4 à Polytech Montpellier. L'objectif était de réaliser une application web pour gérer le Festival du Jeu de Montpellier.  
**Le groupe d'étudiant qui a réalisé l'application :**
- BA Biranne
- BOURRET Raphaël
- XIANG Jingjing

L'application a été déployée et vous pouvez vous y rendre avec ce lien : [Festival du Jeu](https://festival-du-jeux.herokuapp.com) (vous devez connaître les codes pour accéder à la page d'accueil).  
Parallèlement, le groupe à développé une application mobile IOS pour permettre aux visiteurs d'accéder aux informations du festival en cours.  
 
**Le lien du Git de l'application mobile :** [https://github.com/birane906/iOS](https://github.com/birane906/iOS)

## Installation locale

### Prérequis

- nodejs (node, npm)
- Une base de donné postgres

### Installation

Ouvrir un terminal et rentrer les commandes suivantes :
```
git clone https://github.com/birane906/AWI.git AWI
cd api 
npm install
npm start
```
Ouvrir un deuxième terminal dans le dossier `AWI` et rentrer les commandes suivantes :
```
cd client
npm install
npm start
```

Votre application devrait s'ouvrir sur le `localhost:3000` de votre machine.  
Pensez à modifier le fichier `api/db.js` et à renseigner vos propres identifiants de connexions à la base de données.  
Pour remplir votre base de données vous trouverez 2 fichiers `*.backup` à la racine du projet. Restaurez en premier le fichier `schema` et le fichier `data` ensuite. 
