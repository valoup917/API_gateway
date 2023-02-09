
```bash
http get http://localhost:3001/ventes/test

## II Créer un micro service transport
1.  Créer un serveur node js exposé sur le port 3002
2.  Créer une route '/transport' qui sera ta route home qui renvoie "Home serveur transport !"
3.  Créer une route '/transport/test' qui sera une route test qui renvoie "test transport route !"

Si vous voulez tester vos routes, il surffit simplement de:
```bash
http get http://localhost:3002/transport
```
```bash
http get http://localhost:3002/transport/test
```
### III Créer un service gateway
1.  Créer un serveur node js exposé sur le port 3000
    Dans cette ce dossier, créer 3 dossiers: views, utils et registry​
2.  Importez helmet et autorisez les corses
​3.  Créer une route '/' qui renvoie "Home gateway !" et une route '/ping' qui renvoie "Ok"
4.  Maintenant un peu plus compliqué, creer une route contenant une variable 'apiName' et qui autorise toute les extensions de cette route
​