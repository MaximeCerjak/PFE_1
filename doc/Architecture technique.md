- **Est-ce que chaque microservice est dans un conteneur Docker séparé ?**
    
    > Exemple : un service = 1 container = 1 Pi (ou répartis dynamiquement) ? Non car les services cités ne sont pas exhaustif et nous n'aurons pas assez de raspberry pour en dédié un par service, il risque d'y avoir un pi pour le gateway, et le front, deux pi pour les services et un pi frontal.
    
- **Le reverse proxy (Nginx/HAProxy)** :
    
    - Est-il sur un **Pi dédié** ? Oui
        
    - Sert-il uniquement à rediriger HTTP ou aussi WebSocket ? Je ne sais pas ce qui est optimal
        
- **Communication entre services** :
    
    - Les microservices communiquent-ils entre eux via HTTP interne ? Dans l'idéal HTTPS pour des questions des sécurité renforcée
        
    - Y a-t-il un **API Gateway** ou **service de découverte** ? Oui il y aura un Gateway
        
- **Accès au frontend** :
    
    - Est-ce que le frontend est servi par Express ou un serveur statique à part ? JE ne sais pas ce qui serait optimal
        
    - Le client Web (navigateur) interagit uniquement avec l’API backend ? C'est à dire ?
        
- **Y a-t-il un service d’authentification ou un annuaire ?**
    
    - Auth via base interne ? On se dira que dans un premier temps nous devrons construire notre base utilisateurs sans se rattaché aux données et au réseau de l'école
        
    - LDAP ou SSO prévu ? Du coup non

![[ChatGPT Image 6 avr. 2025, 16_31_03.png]]![[output (1).png]]
