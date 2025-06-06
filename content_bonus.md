# Projet **Pixel Art** : plateforme 2D immersive en cluster Raspberry Pi

## Analyse de la problématique et des besoins (A1.1)

Nous ciblons trois personas clés :

- **Étudiant artiste** (18–25 ans) – Profil : passionné d’arts plastiques, familier avec les outils numériques basiques. Besoins/Motivations : explorer sa créativité en réalisant des œuvres pixel art, partager son travail, apprendre des techniques de conception visuelle. Freins/Contraintes : manque de compétences techniques pointues (programmation, réseaux), accès limité à du matériel dédié (PC puissants, tablettes).
    
- **Enseignant** – Profil : artiste confirmé et pédagogue (30–60 ans), à l’aise avec l’informatique basique. Besoins/Motivations : disposer d’un outil ludique pour motiver les étudiants, faciliter l’apprentissage collaboratif, organiser des cours interactifs et des expositions. Freins/Contraintes : temps d’apprentissage de la plateforme, intégration pédagogique, maintenance du matériel.
    
- **Administrateur technique** – Profil : spécialiste informatique (30–50 ans), responsable du déploiement matériel. Besoins/Motivations : un système fiable, peu gourmand en ressources, facile à maintenir. Freins/Contraintes : budgets limités, nécessité d’assurer la sécurité et la disponibilité du réseau local.
    

Ces personas mettent en évidence trois besoins principaux : **créatif** (offrir un espace d’expression artistique intuitif), **pédagogique** (favoriser l’engagement et l’apprentissages par la pratique, la collaboration et l’interaction narrative) et **technique** (solution matérielle fiable, basse consommation et facile à administrer). L’objectif du projet Pixel Art est de mixer ces dimensions : créer un dispositif pédagogique et créatif où les étudiants apprennent en réalisant des œuvres pixel art dans un univers interactif, tout en offrant aux enseignants un moyen d’exposition numérique des projets. Ce mix répond à l’enjeu de **ludification de l’apprentissage artistique**, en liant instruction formelle et expression créative dans un environnement immersif clair et engageant.

## Opportunités, risques et menaces (A1.2)

- **Opportunités clés** : la plateforme encourage **l’apprentissage actif et ludique** (learning by doing) grâce à un gameplay narratif qui améliore l’engagement[roundedlearning.com](https://roundedlearning.com/research/69u51bbtnacr79o5ttd9duwyt7lcpy/#:~:text=The%20effect%20of%20narrative%20in,with%20more%20formal%20learning%20activities). Le style pixel art, visuel et abordable, stimule la créativité et s’appuie sur une tendance artistique contemporaine, ce qui peut renforcer l’adhésion des étudiants. La mutualisation des ressources matérielles (cluster Pi partagé) offre un gain économique et écologique : un Raspberry Pi émet seulement ~8,3 kg CO₂/an contre 175 kg pour un PC de bureau[smsjournals.com](https://smsjournals.com/index.php/SAMRIDDHI/article/view/2312/1084#:~:text=fossil%20fuels,CO2%20for%20an%20entire%20year), ce qui est un argument en faveur de la durabilité du projet. Les enseignants bénéficient d’un cadre d’enseignement novateur (ex. résolution d’énigmes pédagogiques intégrées) et d’un outil d’exposition virtuel pour valoriser les travaux des étudiants.
    
- **Risques** – On identifie plusieurs menaces : **pannes matérielles** (défaillance d’un Pi, d’un switch, etc.), **obsolescence technologique** (évolution rapide des SBC), **désengagement des utilisateurs** (manque d’intérêt des étudiants ou réticence des enseignants), et **problèmes pédagogiques** (contenu non aligné, surcharge cognitive). Un **manque de sécurité** (accès non autorisés) ou une consommation électrique excessive pourraient également être problématiques.
    

Les principaux risques sont résumés dans la matrice suivante, avec leur probabilité, impact et stratégie de mitigation :

|Risque / Menace|Probabilité|Impact|Stratégie de mitigation|
|---|---|---|---|
|Panne matérielle du cluster|Moyenne|Élevé (arrêt)|Redondance des nœuds, sauvegarde régulière, stocks de secours|
|Obsolescence (version Pi)|Moyenne|Moyen|Modularité de l’architecture, plan de mise à jour (incrémenter le cluster avec de nouveaux Pi)|
|Désengagement pédagogique|Faible-Moyenne|Élevé|Implication des étudiants dans la conception, feedback continu, adaptation des activités|
|Inadéquation pédagogique|Faible|Moyen|Collaboration enseignant-développeur, scénarios pédagogiques clairs, évaluation formative|
|Sécurité/Réseau (externe)|Faible|Moyen|Réseau local isolé, authentification par rôles, mises à jour sécurité régulières|
|Consommation énergétique trop forte|Faible|Faible|Utiliser des modes basse conso (mise en veille la nuit), composants efficaces, suivi conso|

Ainsi, les stratégies associées incluent la supervision technique proactive, la formation des utilisateurs, l’itération pédagogique (ajustement des contenus) et le choix de technologies durables.

## Solutions techniques et ressources mobilisées (A1.3)

Le **cluster Raspberry Pi** est au cœur de l’infrastructure. Ce choix est justifié par son coût modéré, sa faible consommation d’énergie et sa flexibilité pour un réseau local isolé. Des enseignants utilisent déjà des grappes de Pi en salle de classe pour faciliter l’enseignement : par exemple, Mike Reed a déployé un cluster de 32 Raspberry Pi 4B, permettant aux élèves de se connecter à leur propre Pi via VNC afin que l’enseignant puisse se concentrer sur le contenu pédagogique plutôt que sur la maintenance des postes[tomshardware.com](https://www.tomshardware.com/news/raspberry-pi-cluster-for-classroom#:~:text=The%20students%20in%20Reed%E2%80%99s%20class,wasting%20time%20assisting%20with%20hardware). Chaque Pi (modèle 5 recommandé pour ses performances, 4–8 Go de RAM) agira comme client ou serveur local, connecté à un switch Ethernet central.

Les technologies logicielles choisies sont : **React** pour l’interface web dynamique (car React est une bibliothèque JS populaire pour bâtir des interfaces réactives et modulaires[opensource.fb.com](https://opensource.fb.com/projects/react/#:~:text=React%20is%20a%20JavaScript%20library,for%20building%20user%20interfaces)), **Phaser** pour le moteur de jeu 2D HTML5 (Phaser est un framework open-source optimisé pour les jeux 2D sur navigateur[en.wikipedia.org](https://en.wikipedia.org/wiki/Phaser_\(game_framework\)#:~:text=Phaser%20is%20a%202D%20game,2)) et **Node.js/Express** pour le serveur backend (Node.js est un environnement d’exécution JavaScript spécialement conçu pour créer des serveurs rapides[nodejs.org](https://nodejs.org/fr#:~:text=Node,de%20commande%20et%20des%20scripts), et Express est un framework minimaliste pour développer des APIs web robustes[expressjs.com](https://expressjs.com/#:~:text=Express%20is%20a%20minimal%20and,for%20web%20and%20mobile%20applications)). Cette pile JavaScript unifiée (frontend React/Phaser, backend Node/Express) facilite le développement et la maintenance. Elle bénéficie d’une large communauté et de retours d’expérience : par exemple, des sites comme Netflix ou Airbnb utilisent React en production[simform.com](https://www.simform.com/blog/nodejs-vs-react/#:~:text=Founded%20and%20maintained%20by%20Facebook%2C,use%20React%20in%20their%20production), gage de fiabilité et d’évolution continue.

**Inventaire des ressources :** sur le plan matériel, on prévoit un cluster d’environ 10–16 Raspberry Pi 5 (8 Go) avec leurs alimentations (∼76 € par unité[it-connect.fr](https://www.it-connect.fr/raspberry-pi-5-officiel-caracteristiques-prix/#:~:text=,soit%20environ%2076%20euros%20HT)), un switch réseau Gigabit et câbles Ethernet, un boîtier de rack ou supports modulaires pour l’ensemble, ainsi qu’un ou deux serveurs de secours éventuels. Logiciels : tous sont open-source (Raspberry Pi OS, Node.js, React, Phaser, etc., aucun coût de licence). Côté humains, on mobilise un développeur web (JS/Phaser), un administrateur système pour l’installation/maintenance, un enseignant référent (pour valider la pédagogie) et un administrateur réseau.

**Cas d’usage principaux :**

- **Création d’œuvres** : un éditeur de pixel art intégré (basé sur Phaser) permet aux étudiants de dessiner et animer, seuls ou en binôme.
    
- **Exploration de l’univers 2D** : les utilisateurs se déplacent dans un monde immersif en pixel art (style « Gaether »), découvrant à la fois leurs créations et celles des autres.
    
- **Interaction sociale** : chat en temps réel, commentaires sur les œuvres, collaboration sur des projets collectifs.
    
- **Exposition virtuelle** : une galerie interactive permet d’organiser et d’admirer les travaux finalisés, avec possibilité de « like » ou annotation, créant une véritable exposition numérique.
    
- **Énigmes pédagogiques** : des mini-jeux ou puzzles disséminés dans l’univers (par exemple, associer couleur et théorie des couleurs) renforcent les apprentissages artistiques de manière ludique.
    

Ces fonctionnalités sont rendues possibles par le couplage React/Phaser (interface graphique) et Node/Express (gestion des données, authentification et sauvegarde). Par exemple, l’éditeur de dessin est une scène Phaser embarquée dans un composant React, tandis qu’un serveur Express traite la connexion utilisateur, l’enregistrement des œuvres et la diffusion en réseau local.

## Macro-chiffrage du projet (A1.4)

Le coût matériel initial comprend principalement les Raspberry Pi et équipements réseau : par exemple, 10 Raspberry Pi 5 (8 Go) à environ 76 € chacun[it-connect.fr](https://www.it-connect.fr/raspberry-pi-5-officiel-caracteristiques-prix/#:~:text=,soit%20environ%2076%20euros%20HT) (≈760 €), plus 10 alimentations USB-C (∼15 €), un switch Gigabit 16 ports (~100 €), câbles (~50 €) et un boîtier/support de rack (50 €). On arrive à environ **1 000 € de matériel** de base. Les logiciels sont gratuits.

La maintenance (remplacement de matériel, mises à jour, etc.) peut être estimée à ~5–10 % du coût matériel par an, soit 50–100 €/an. La consommation électrique est faible : un Pi 5 8 Go consomme ~3–5 W (idéalement ~3,2 W au repos[raspberrypi.stackexchange.com](https://raspberrypi.stackexchange.com/questions/5033/how-much-energy-does-the-raspberry-pi-consume-in-a-day#:~:text=Pi5%202GB%20RAM%20idle%20,daily%2076.8%20Wh)), soit ~28–44 kWh/an. Dix Pi consomment ainsi ~280–440 kWh/an. À 0,20 €/kWh, cela correspond à **≈56–88 € d’électricité par an**. Ainsi, le coût annuel global (électricité + maintenance) reste modeste (quelques centaines d’euros).

En synthèse, le coût par poste est faible : environ 100–150 € de matériel (Pi + alimentation) amorti sur plusieurs années, plus ≈10 €/an d’électricité/maintenance par poste. Pour 10 utilisateurs simultanés, le coût initial global est d’environ 1 000 €, avec des frais annuels d’entretien/énergie d’environ 150 €.

## Architecture logicielle et innovations (A1.5)

L’architecture suit un modèle **client/serveur** : un ou plusieurs nœuds servent de serveurs applicatifs (Node.js/Express), tandis que chaque utilisateur (élève, enseignant, administrateur) y accède via un client Web sur son Pi (navigateur Chrome/Firefox) connecté au cluster. Les rôles se répartissent ainsi : les **élèves** créent et explorent le contenu, les **enseignants** modèrent, organisent les expositions et suivent les progrès pédagogiques, et l’**admin** gère la plateforme (création de comptes, sécurité, maintenance).

La **sécurité et l’authentification** se font par login/mot de passe avec gestion des permissions. On peut implémenter un système de sessions JWT ou OAuth simple via Express. Le code front-end React est organisé en composants (éditeur de pixel, scène d’exploration, tableau de bord, etc.), et chaque composant Phaser est encapsulé dans un composant React pour intégrer le rendu 2D dans l’interface. Le serveur Express expose des APIs REST pour l’authentification, la récupération/enregistrement des images pixel, et la synchronisation des sessions multi-joueurs.

En terme d’innovations **pédagogiques et techniques** : l’intégration d’un **gameplay narratif** dans cet environnement est essentielle. En effet, une trame narrative (par ex. une quête artistique) peut maintenir l’engagement des étudiants et contextualiser les activités, ce qui accroît l’apprentissage[roundedlearning.com](https://roundedlearning.com/research/69u51bbtnacr79o5ttd9duwyt7lcpy/#:~:text=The%20effect%20of%20narrative%20in,with%20more%20formal%20learning%20activities). De plus, l’utilisation d’un cluster de SBC à bas coût est en soi une innovation technologique permettant une solution scalable et écologique. Comme le montre l’analyse de l’empreinte carbone, basculer d’une infrastructure PC traditionnelle à un cluster Raspberry Pi réduit drastiquement les émissions (8,3 kg CO₂/an contre 175 kg/an pour un PC)[smsjournals.com](https://smsjournals.com/index.php/SAMRIDDHI/article/view/2312/1084#:~:text=fossil%20fuels,CO2%20for%20an%20entire%20year). Cette faible empreinte énergétique, combinée à la possibilité d’ajouter facilement des nœuds Pi ou de migrer partiellement vers le cloud, assure une **scalabilité** progressive du système (on peut étendre le cluster ou déporter des services en ligne selon la croissance des besoins).

## Cadrage client et validation (A1.6)

On anticipe plusieurs objections possibles :

- **Coût** : bien que le financement initial (~1 000 €) puisse sembler élevé, il demeure faible comparé à l’achat de PC ou serveurs traditionnels pour un usage similaire. De plus, les coûts récurrents sont très faibles (faible consommation électrique et open-source).
    
- **Sécurité** : la plateforme étant isolée sur un réseau local dédié, les risques d’intrusion externe sont réduits. Des mesures d’authentification par rôles et des sauvegardes régulières garantiront la confidentialité et la pérennité des données.
    
- **Pérennité** : utiliser des composants standardisés (Raspberry Pi, open-source) et documentés (Node.js, React) assure une longue durée de vie technique. La modularité du cluster permet de remplacer ou mettre à niveau les éléments (nouveaux modèles de Pi, mises à jour logicielles).
    

Pour **valider** le projet, on propose un plan en plusieurs jalons :

1. **Prototype interne** : développer un prototype basique de l’éditeur pixel art et de l’environnement d’exploration. Tester en interne avec l’équipe projet (fonctionnalité, stabilité).
    
2. **Tests utilisateurs** : organiser des ateliers pilotes avec quelques enseignants et étudiants (sessions de 1–2 semaines). Recueillir leur feedback (sondage, interviews) sur l’ergonomie, l’intérêt pédagogique et artistique du système.
    
3. **Améliorations itératives** : intégrer les retours pour améliorer l’interface, corriger les bugs et enrichir les scénarios pédagogiques.
    
4. **Validation finale** : réaliser une démonstration technique (benchmarks de performance, tests de charge du cluster) et une validation pédagogique (études de cas, mesure de l’engagement des étudiants).