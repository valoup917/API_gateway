# Bienvenue sur ce Worksop de création d'API Gateway

On va bien s'amuser tous ensemble et j'èspere vraiment que vous pourrez apprendre quelques chose de nous.

## L'API Gateway ?
L'api gateway et assimilable à la porte d'entrée d'une maison, toute personnes voulant rentrer dans la maison doit passer par cette porte.
La maison correspond à votre architecture générale et chaque porte (porte de salle de bain, toilette, cuisine, chambres...) à un micro service.
On rentre d'abord par la porte d'entrée pour acceder aux autres pieces, on passe d'abord par la gateway sans meme que l'utilisateur s'en rende compte pour ensuite acceder au micro service.
La mise en place d'une gateway répond surtout à des problèmes de sécurité et d'organisation, de management de flux. En effet, si jamais votre porte d'entrée disparait, plein de cambrioleur y penetrerons, ou tout simplement plein de gens s'y inviterons sans que vous sachiez qui ils sont, d'où ils viennent, où ils veulent aller, pourquoi sont ils la, et où ils se trouvent dans votre maison.
Si vous avez du mal avec cette notion, essayez tout au long du workshop de recreer ces analogies avec les exercices et la maison.
Bon courage !

## I. Créer un micro service ventes
1.  Créer un serveur node js exposé sur le port 3001
2.  Créer une route '/ventes' qui sera ta route home qui renvoie "Home serveur ventes !"
3.  Créer une route '/ventes/test' qui sera une route test qui renvoie "test ventes route !"

Si vous voulez tester vos routes, il suffit simplement de:
```bash
http get http://localhost:3002/ventes
```
```bash
http get http://localhost:3001/ventes/test
```


## II. Créer un micro service transport
1.  Créer un serveur node js exposé sur le port 3002.
2.  Créer une route '/transport' qui sera ta route home qui renvoie "Home serveur transport !"
3.  Créer une route '/transport/test' qui sera une route test qui renvoie "test transport route !"

Si vous voulez tester vos routes, il surffit simplement de:
```bash
http get http://localhost:3002/transport
```
```bash
http get http://localhost:3002/transport/test
```


## III. Créer un service gateway
1.  Créer un serveur node js exposé sur le port 3000.
    Dans cette ce dossier, créer 3 dossiers: views, utils et registry.
2.  Importez helmet et autorisez les corses.
3.  Créer une route '/' qui renvoie "Home gateway !" et une route '/ping' qui renvoie "Ok".

```bash
http get http://localhost:3000/
```
```bash
http get http://localhost:3000/ping
```

4.  Maintenant un peu plus compliqué, creer une route contenant une variable 'apiName' et qui autorise toute les extensions de cette route.
    Cette route devra récuperer le nom de l'api ciblée.
5.  Prenez conaiscance du fichier registry.json, c'est le fichier qui ressence toutes les instances de vos micro services, c'est en resumer l'annuaire de cette api gateway.
    Puis, dans la même route que l'étape 4, créer un objet qui vas contenir les informations du service appelé (l'objet devra contenir une partie du fichier registry.json)
6.  Grâce à l'oobjet précédament créé, vous pouvez maintenant dans la même route, utiliser la librairie axios pour rediriger la requete vers un nouvelle endpoint avec les memes informations que la requete recue.

Pour tester si votre gateway fonctionne correctement:
```bash
http get http://localhost:3000/transport
```
```bash
http get http://localhost:3000/transport/test
```
```bash
http get http://localhost:3000/ventes
```
```bash
http get http://localhost:3000/ventes/test
```
Ce sont les memes requetes que celles pour vos micros service mais le port a changé, c'est le port de la gateway. Si tout ce passe bien bous devriez avoir le meme resultat. Sinon passez nous voir ;)

## IV. Completer la gateway
1.  Créer une route '/register' qui permet d'ajouter un micro service directement grace a une requete sur cette route, dans le fichier registry.json.
    Les champs demandé fans le body seront le protocole, l'host, le port et le nom de l'api.
2.  Créer une route '/unregister' qui fait l'effet inverse.
3.  Créer une route '/enable/' qui prend en parametre l'apiName qui permet de passer a true ou a false le champ "enabled" dans le fichier registry.json du micro service ciblé.
4.  La derniere étape et pas des moindres pour ceux qui ont terminé rapidement, implementer le lot de balancer ROUND_ROBIN à l'interieur de votre route principale (route de l'étape 4 de la partie 3). Cette technique se base sur l'index de l'instance du fichier registry. Pour plus de conseil, passez nous voir ;)
5.  Si jamais vous etes vrmt des monstres, implementer un affichage graphique des services de votre gateway grace à une nouvelle route '/ui', qui afficheras toute les données du fichier registry.json. 




### •Bonne chances et bon courage mes loupios•


Silya et Valoup
