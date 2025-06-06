## Slide 1 : Page de garde

- Titre du projet : Digital Drifter : une plateforme immersive dédiée à la collaboration et aux relations scolaires.
    
- Nom du candidat 
    
- Date de soutenance
    
- Logo ou visuel attractif (ex. screenshot projet)
    

---

## Slide 2 : 🎬 **Introduction**

- Contexte : école d’art, besoin d’un espace numérique immersif et créatif.
    
- Présentation du projet : une plateforme intranet sous forme de monde 2D, type **Gather**, pour **échanger, créer, exposer**.
    
- Objectif : offrir aux étudiants un espace numérique stimulant, sans dépendre d’Internet.
---

## Slide 3 : 🧩 **Cartographie des parties prenantes**

- **Commanditaire** : École, équipe pédagogique
    
- **Utilisateurs** : Étudiants, enseignants, administration
    
- **Équipe projet** : 1 développeur fullstack, administration système et réseaux, 1 graphiste
    
- **Autres acteurs éventuels** : Maintenance IT
    

---

## Slide 4 : 🔍 **Analyse des besoins et des enjeux**

- **Besoins fonctionnels** : messagerie interne, espaces collaboratifs, expositions virtuelles, navigation libre.
    
- **Contraintes** : autonomie complète du réseau, accessibilité sans Internet, matériel à ressources limitées (Raspberry Pi).
    
- **Enjeux** :
    
    - Pédagogiques : stimuler la création et la collaboration.
        
    - Techniques : garantir performance & accessibilité locale.
        

---

## Slide 5 : 🧭 **Étude d’opportunité, menaces et faisabilité**

- **Opportunités** : valorisation des travaux étudiants, innovation pédagogique, autonomie de l'école.
    
- **Menaces** : sécurité des données, montée en charge (si trop d’élèves connectés), pérennité de l’hébergement.
    
- **Faisabilité technique** :
    
    - Stack web légère (React + Phaser + Express).
        
    - Réseau privé local, déploiement Docker sur Raspberry Pi.

| **Forces** ✅           | **Faiblesses** ⚠️                |
| ---------------------- | -------------------------------- |
| Innovation pédagogique | Puissance limitée (Raspberry Pi) |
| Maîtrise des données   | Maintenance interne              |
| Faible coût matériel   | Non accessible hors site         |

| **Opportunités** 🚀    | **Menaces** ⚡                |
| ---------------------- | ---------------------------- |
| Valorisation étudiants | Risque cybersécurité interne |
| Autonomie école        | Montée en charge             |
| Extension potentielle  | Pérennité matériel           |

---

## Slide 6 : ⚙️ **Choix techniques et étude comparative**

- Pourquoi **Phaser** : performant pour du rendu 2D en canvas, facile à intégrer dans React.
    
- Pourquoi **Express** : léger, modulaire, bonne compatibilité avec l’environnement Node/Raspberry.
    
- Alternatives considérées ? Ex. : Unity (trop lourd), WebGL seul (trop complexe).

| Critères                   | PhaserJS + React | Unity | WebGL seul |
| -------------------------- | ---------------- | ----- | ---------- |
| Performance                | ✅                | ⚠️    | ✅          |
| Facilité d'intégration     | ✅                | ⚠️    | ❌          |
| Poids ressources           | ✅                | ❌     | ✅          |
| Compatibilité Raspberry Pi | ✅                | ❌     | ⚠️         |

---

## Slide 7 : 📐 **Architecture logicielle**

- Microservices (si applicable : gestion utilisateurs, map, assets, dialogues…)
    
- Frontend en React, Phaser encapsulé dans des composants.
    
- Backend Express avec routes REST ou websocket.
    
- Base de données : à préciser (PostgreSQL ? SQLite ?).
    
- Schéma réseau local (école ↔ cluster Raspberry Pi).

**Frontend (React/PhaserJS)** ⟶ **Backend (ExpressJS, API REST & WebSocket)** ⟶ **Base de données (SQLite)** ⟶ **Réseau local privé de l'école**

- Justification choix technologiques : Légèreté, compatibilité Raspberry Pi, performance adaptée au nombre d’utilisateurs
    

---

## Slide 8 :⏱ **Macro-chiffrage**

- Estimation en **jours/homme** pour chaque phase : dev frontend, backend, assets, test.
    
- Budget : limité (auto-hébergement), éventuellement coût en matériel (cluster, stockage, sauvegarde).
    
- Contraintes : temps disponible, partage des tâches avec ton ami.

|   |   |   |   |
|---|---|---|---|
|Tâches|Développeur|Graphiste|Total (jours-homme)|
|Conception initiale|4|1|5|
|Développement frontend|15|-|15|
|Développement backend|12|-|12|
|Création assets graphiques|-|15|15|
|Déploiement et tests|4|2|6|
|Documentation|2|-|2|
|**Total**|**37**|**18**|**55**|

- Postes principaux : Temps humain, matériel complémentaire (mémoire, réseau)
    

---

## Slide 9 : 🧠 **Démarche de veille & innovation**

- Technologies monitorées : frameworks JS légers, outils d’optimisation WebGL, interactions sans Internet.
    
- Sources : blog dev, Reddit, GitHub, Conf JS/React.
    
- Innovations intégrées : interface pixel art + accès réseau local offline.

- Méthodes utilisées : Blogs spécialisés, conférences en ligne, documentation officielle
    
- Innovations intégrées : Réseau local autonome, utilisation cluster Raspberry Pi, intégration PhaserJS
    
- Impact prévu : Autonomie, engagement pédagogique renforcé, optimisation budgétaire
    

---

## Slide 10 : **Présentation finale et conclusion**

- Vulgarisation du projet pour un public non-technique.
    
- Valorisation du potentiel du projet pour l'école.
    
- Prochaines étapes (déploiement, tests, retours utilisateurs).
    
- Demande de validation du cadrage par le jury.

- Points clés : Autonomie, coût minimal, innovation pédagogique
    
- Feuille de route : Tests utilisateurs, déploiement, retours d'expérience
    
- Demande de validation formelle du projet
    

---

## Slide 11 : Questions / Réponses

- Échange avec le jury
    
- Coordonnées / lien vers démonstration ou prototype
    