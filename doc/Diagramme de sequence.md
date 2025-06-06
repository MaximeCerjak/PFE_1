### 🔑 Scénario 1 : Connexion d’un utilisateur

**Acteurs** : Utilisateur → Client Web → API Gateway → Service scène → Utilisateur → API Gateway → Service Auth → Base de données  
**Actions** :

1. L’utilisateur se trouve dans la scène de l'administration (une map évoquant une administration). Pour afficher cette scène le client as déjà du recevoir des données du service de scène qui centralise les services map, dialogues, evenement, story en pensant par le Gateway API.
    
2. Le client envoie les identifiants à l’API via une interaction avec un pnj pour s'authentifier (lorsqu'il est déjà inscrit)
    
3. L’API transmet au service Auth.
    
4. Le service Auth vérifie dans la BDD.
    
5. Retour du token JWT et des informations du joueur, avatar, evolution dans le monde...
    

---

### 🚪 Scénario 2 : Accès à une scène du métavers

**Acteurs** : Utilisateur → Client Web → API Gateway → Service scène → BDD  
**Actions** :

1. L’utilisateur se téléporte.
    
2. Le client demande les données de la scène cible en envoyant certaines données de la scène d'origine (id de la scène actuelle, position du point de transition).
    
3. L’API contacte le service Scène.
    
4. Le service scène interroge les différent services impliqués, map, story, events, dialogs qui vont eux mêmes interroger la BDD.
    
5. Les données sont retournées et affichées.
    

---

### 🎒 Scénario 3 : Upload d’un fichier (exposition d’un projet)

**Acteurs** : Utilisateur → Client Web → API Gateway → Service Assets → Stockage local  
**Actions** :

1. L’utilisateur sélectionne un fichier.
    
2. Le client l’envoie à l’API.
    
3. L’API redirige vers le service Assets.
    
4. Le fichier est stocké.
    
5. Confirmation renvoyée.
    

---

## 📩 Dis-moi :

1. Quel scénario tu veux qu’on modélise ?
    
2. Tu veux que ce soit **générique** ou avec **des noms précis** (ex. `/login`, `UserService`, `JWT`) ?
    
3. Tu préfères une **version image illustrée** comme pour le schéma d’architecture ou un **diagramme Mermaid** aussi ?